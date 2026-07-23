export function createNotFound() {
  const container = document.createElement('div');
  container.className = 'page not-found-page';

  container.innerHTML = `
    <section class="section page-hero not-found-hero">
      <div class="container-wide">
        <div class="section-header" style="max-width: 680px; margin: 0 auto; text-align: center;">
          <div class="detail-hero-badge" style="--badge-color: #ef4444; margin-bottom: 1.5rem; justify-content: center;">
            <span class="badge-dot" style="background-color: #ef4444;"></span>404 Error
          </div>
          <h1 class="heading-hero detail-hero-title">
            Page Not <span class="text-gradient" style="background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Found</span>
          </h1>
          <p class="text-body-lg detail-hero-desc" style="margin: 0 0 2rem 0; font-weight: 400; opacity: 0.9;">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist anymore.
          </p>
          <div class="hero-actions" style="justify-content: center;">
            <a href="/" class="btn btn-primary">Return to Homepage</a>
            <a href="/contact" class="btn btn-ghost">Contact Support</a>
          </div>
        </div>
      </div>
    </section>
  `;

  return container;
}
