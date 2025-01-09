// JavaScript for Portfolio Interaction
document.addEventListener('DOMContentLoaded', () => {
    // Expand/Collapse functionality for projects
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
      button.addEventListener('click', event => {
        const projectCard = event.target.closest('.project-card');
        
        if (projectCard.classList.contains('expanded')) {
          projectCard.classList.remove('expanded');
          button.textContent = 'See more';
        } else {
          projectCard.classList.add('expanded');
          button.textContent = 'See less';
        }
      });
    });
  
    // Enable smooth vertical scrolling with scroll snapping
    document.body.style.scrollSnapType = 'y mandatory';
  });
  