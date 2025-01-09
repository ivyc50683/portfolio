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

    // Add smooth scrolling on wheel scroll
    let isHorizontalScroll = false;

    // Detect scrolling direction and apply scroll behavior
    document.querySelectorAll('section').forEach(section => {
      section.addEventListener('wheel', (e) => {
        // Detect horizontal or vertical scroll
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
          isHorizontalScroll = true;  // Horizontal scroll (inside projects or blog)
        } else {
          isHorizontalScroll = false; // Vertical scroll (for full-page sections)
        }

        if (!isHorizontalScroll) {
          // Enable vertical scroll snapping for full-page sections
          document.body.style.scrollSnapType = 'y mandatory';
          const nextSection = e.deltaY > 0 ? section.nextElementSibling : section.previousElementSibling;
          if (nextSection) {
            e.preventDefault();  // Prevent default scroll behavior
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Disable scroll snapping for horizontal scrolling sections
          document.body.style.scrollSnapType = 'none';
        }
      });
    });
});
