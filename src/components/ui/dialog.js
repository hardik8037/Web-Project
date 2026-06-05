/**
 * Vanilla JS Dialog (Modal) Component
 * Matches Shadcn interaction patterns
 */

export function initDialogs() {
  const triggers = document.querySelectorAll('[data-dialog-trigger]');
  const closeButtons = document.querySelectorAll('[data-dialog-close]');
  const overlays = document.querySelectorAll('.dialog-overlay');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute('data-dialog-trigger');
      const dialog = document.getElementById(targetId);
      if (dialog) {
        openDialog(dialog);
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dialog = btn.closest('.dialog-overlay');
      if (dialog) {
        closeDialog(dialog);
      }
    });
  });

  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      // Close if clicked directly on the overlay backdrop
      if (e.target === overlay) {
        closeDialog(overlay);
      }
    });
  });

  // Handle ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openDialogs = document.querySelectorAll('.dialog-overlay.open');
      openDialogs.forEach(dialog => closeDialog(dialog));
    }
  });
}

function openDialog(dialog) {
  dialog.classList.remove('hidden');
  // Small delay to allow display:block to apply before animating opacity/transform
  requestAnimationFrame(() => {
    dialog.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });
}

function closeDialog(dialog) {
  dialog.classList.remove('open');
  document.body.style.overflow = '';
  // Wait for transition to finish before hiding
  setTimeout(() => {
    dialog.classList.add('hidden');
  }, 300); // Matches Tailwind duration-300
}
