/**
 * Vanilla JS Dropdown Component
 * Matches Shadcn interaction patterns
 */

export function initDropdowns() {
  const triggers = document.querySelectorAll('[data-dropdown-trigger]');
  
  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = trigger.getAttribute('data-dropdown-trigger');
      const dropdown = document.getElementById(targetId);
      
      if (dropdown) {
        const isOpen = dropdown.classList.contains('open');
        
        // Close all other dropdowns
        closeAllDropdowns();
        
        if (!isOpen) {
          dropdown.classList.remove('hidden');
          requestAnimationFrame(() => {
            dropdown.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
          });
        }
      }
    });
  });

  // Click outside to close
  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-dropdown-trigger]') && !e.target.closest('.dropdown-content')) {
      closeAllDropdowns();
    }
  });

  // ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
    }
  });
}

function closeAllDropdowns() {
  const openDropdowns = document.querySelectorAll('.dropdown-content.open');
  const triggers = document.querySelectorAll('[data-dropdown-trigger]');
  
  triggers.forEach(t => t.setAttribute('aria-expanded', 'false'));
  
  openDropdowns.forEach(dropdown => {
    dropdown.classList.remove('open');
    setTimeout(() => {
      dropdown.classList.add('hidden');
    }, 150); // Match transition duration
  });
}
