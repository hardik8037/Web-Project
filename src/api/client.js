/**
 * Botzo.io Enterprise API Abstraction Layer
 * 
 * Provides centralized network communication, standardized error handling,
 * request/response interceptors, retry strategies, and timeout controls.
 * 
 * FUTURE BACKEND INTEGRATION:
 * When the backend is deployed, the BASE_URL should be changed to the secure API gateway.
 * The webhook URL below is TEMPORARILY stored here to preserve backward compatibility
 * until the backend takes over routing to prevent exposure.
 */

// ==========================================
// CONFIGURATION & CONSTANTS
// ==========================================
// TEMPORARY: Webhook URL will be replaced by local `/api/contact` paths when backend is ready.
// Security Note: Storing this here does NOT hide it from the browser. It abstracts it.
const FALLBACK_WEBHOOK_URL = 'https://webhooks.1automations.com/webhook/6a4aba916f1a8bf9dd888ba2';
const DEFAULT_TIMEOUT_MS = 10000; // 10 seconds
const MAX_RETRIES = 2;

// ==========================================
// ABORT CONTROLLER CACHE
// ==========================================
const requestControllers = new Map();

/**
 * Standardized API Error Class
 */
export class ApiError extends Error {
  constructor(message, status = 500, code = 'UNKNOWN_ERROR', originalError = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.originalError = originalError;
  }
}

// ==========================================
// INTERCEPTORS
// ==========================================
const interceptors = {
  request: async (config) => {
    // Future: Inject CSRF Token
    // config.headers['X-CSRF-Token'] = getCsrfToken();
    
    // Future: Inject JWT / OAuth Bearer Token
    // const token = getAuthToken();
    // if (token) config.headers['Authorization'] = `Bearer ${token}`;
    
    // Set default headers
    config.headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...config.headers
    };
    return config;
  },
  response: async (response) => {
    // Future: Global response logging / analytics hooks
    if (!response.ok) {
      throw new ApiError(`HTTP Error: ${response.status}`, response.status, 'HTTP_ERROR');
    }
    // Handle cases where webhook might return empty string or non-JSON
    const text = await response.text();
    try {
      return text ? JSON.parse(text) : {};
    } catch (e) {
      return text;
    }
  },
  error: (error) => {
    // Future: Global error tracking (e.g., Sentry)
    console.warn('[Botzo API Client] Request failed:', error.message);
    throw error;
  }
};

// ==========================================
// CORE FETCH WRAPPER
// ==========================================
async function fetchWithRetry(url, config, retries = 0) {
  const requestId = config.id || url;
  
  // Abort previous identical requests (Debouncing/Throttling)
  if (requestControllers.has(requestId)) {
    requestControllers.get(requestId).abort();
  }
  
  const controller = new AbortController();
  requestControllers.set(requestId, controller);
  
  // Apply Request Interceptor
  const finalConfig = await interceptors.request({
    ...config,
    signal: controller.signal
  });

  const timeoutId = setTimeout(() => controller.abort(), finalConfig.timeout || DEFAULT_TIMEOUT_MS);

  try {
    const response = await fetch(url, finalConfig);
    clearTimeout(timeoutId);
    requestControllers.delete(requestId);
    
    // Apply Response Interceptor
    return await interceptors.response(response);
  } catch (error) {
    clearTimeout(timeoutId);
    requestControllers.delete(requestId);
    
    if (error.name === 'AbortError') {
      return interceptors.error(new ApiError('Request timed out or was aborted.', 408, 'TIMEOUT'));
    }
    
    // Retry Strategy
    if (retries < MAX_RETRIES) {
      const delay = Math.pow(2, retries) * 500; // Exponential backoff (500ms, 1000ms)
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchWithRetry(url, config, retries + 1);
    }
    
    return interceptors.error(new ApiError('Network request failed.', 500, 'NETWORK_ERROR', error));
  }
}

// ==========================================
// EXPOSED API METHODS
// ==========================================
export const apiClient = {
  /**
   * Submit Sales Inquiry
   * Future Backend Route: POST /api/contact
   */
  submitInquiry: async (payload) => {
    // Centralized Payload Validation
    if (!payload || !payload.email) {
      throw new ApiError('Invalid payload: Email is required.', 400, 'VALIDATION_ERROR');
    }
    
    return fetchWithRetry(FALLBACK_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      id: 'contact_submit' // Unique ID for abort controller
    });
  },

  /**
   * Submit Book Demo
   * Future Backend Route: POST /api/demo
   */
  submitDemo: async (payload) => {
    if (!payload || !payload.email) {
      throw new ApiError('Invalid payload: Email is required.', 400, 'VALIDATION_ERROR');
    }
    
    return fetchWithRetry(FALLBACK_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
      id: 'demo_submit'
    });
  },

  /**
   * Subscribe to Newsletter
   * Future Backend Route: POST /api/newsletter
   */
  subscribeNewsletter: async (email) => {
    if (!email || !email.includes('@')) {
      throw new ApiError('Invalid email format.', 400, 'VALIDATION_ERROR');
    }
    
    return fetchWithRetry(FALLBACK_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify({
        email,
        source: 'Footer Newsletter',
        timestamp: new Date().toISOString()
      }),
      id: 'newsletter_submit'
    });
  }
};
