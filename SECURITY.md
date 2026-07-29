# Security Overview & Content Security Policy (CSP)

This document outlines the strict security practices implemented in the Botzo.io frontend.

## Content Security Policy (CSP)

Botzo.io enforces a production-grade Content Security Policy to eliminate Cross-Site Scripting (XSS) and data injection attacks.

**Key Achievements:**
- **Zero `'unsafe-inline'`**: The application executes zero inline scripts. All JavaScript runs from secure, bundled ES Modules.
- **Zero `'unsafe-eval'`**: The architecture completely avoids `eval()`, `new Function()`, and runtime template engines that rely on string execution.
- **No Inline Event Handlers**: All UI interactions (hover states, clicks) that traditionally used `onmouseover` or `onclick` HTML attributes have been mapped to pure CSS pseudo-classes (`:hover`) or delegated JavaScript event listeners.

## Dependency Management

- We avoid heavy third-party tracking scripts that inject inline styles or scripts unless they are validated and wrapped in secure sandboxes.
- We utilize `DOMPurify` (or similar utilities) before injecting any remote HTML strings into the DOM.

## Submitting Vulnerabilities

If you discover a security vulnerability within Botzo.io, please send an e-mail to our security team. We will address it immediately. Do not disclose the vulnerability publicly until it has been patched.
