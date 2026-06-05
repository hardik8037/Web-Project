/**
 * Vanilla JS Accordion Component
 * Uses native <details> with JS for smooth animation
 */

export function initAccordions() {
  const accordions = document.querySelectorAll('[data-accordion]');

  accordions.forEach(accordion => {
    const type = accordion.getAttribute('data-accordion-type') || 'single';
    const items = accordion.querySelectorAll('details[data-accordion-item]');

    items.forEach(item => {
      const summary = item.querySelector('summary');
      const content = item.querySelector('[data-accordion-content]');

      summary.addEventListener('click', (e) => {
        e.preventDefault();

        // If single type, close others
        if (type === 'single' && !item.open) {
          items.forEach(otherItem => {
            if (otherItem !== item && otherItem.open) {
              closeAccordionItem(otherItem, otherItem.querySelector('[data-accordion-content]'));
            }
          });
        }

        if (item.open) {
          closeAccordionItem(item, content);
        } else {
          openAccordionItem(item, content);
        }
      });
    });
  });
}

function openAccordionItem(item, content) {
  item.open = true;
  const icon = item.querySelector('.accordion-icon');
  if(icon) icon.style.transform = 'rotate(180deg)';
  
  // Smooth height animation could be added here, but Tailwind group-open is often enough for standard Shadcn
}

function closeAccordionItem(item, content) {
  const icon = item.querySelector('.accordion-icon');
  if(icon) icon.style.transform = 'rotate(0deg)';
  item.open = false;
}
