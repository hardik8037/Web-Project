/**
 * Vanilla JS Tabs Component
 * Matches Shadcn interaction patterns
 */

export function initTabs() {
  const tabLists = document.querySelectorAll('[data-tabs]');

  tabLists.forEach(tabList => {
    const triggers = tabList.querySelectorAll('[data-tabs-trigger]');
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetValue = trigger.getAttribute('data-tabs-trigger');
        const container = trigger.closest('[data-tabs-container]') || document;
        
        // Deactivate all triggers in this group
        triggers.forEach(t => t.classList.remove('active', 'bg-background', 'text-foreground', 'shadow-sm'));
        triggers.forEach(t => t.classList.add('text-muted-foreground'));
        
        // Activate clicked trigger
        trigger.classList.remove('text-muted-foreground');
        trigger.classList.add('active', 'bg-background', 'text-foreground', 'shadow-sm');

        // Hide all contents in this group
        const contents = container.querySelectorAll(`[data-tabs-content]`);
        // Filter contents that belong to this specific tab group (if multiple on page)
        // For simplicity, assuming data-tabs-content is scoped by closest container
        contents.forEach(content => {
          // If the content is associated with this tab group
          if (content.closest('[data-tabs-container]') === container || !container) {
            content.classList.add('hidden');
          }
        });

        // Show target content
        const targetContent = container.querySelector(`[data-tabs-content="${targetValue}"]`);
        if (targetContent) {
          targetContent.classList.remove('hidden');
        }
      });
    });
  });
}
