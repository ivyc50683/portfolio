document.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            console.log(`Navigating to: ${event.target.textContent}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  // Expand/Collapse functionality for projects
  const expandButtons = document.querySelectorAll('.expand-btn');

  expandButtons.forEach(button => {
      button.addEventListener('click', event => {
          const projectCard = event.target.closest('.project-card');
          if (projectCard.classList.contains('expanded')) {
              projectCard.classList.remove('expanded');
              button.textContent = 'Read more';
          } else {
              projectCard.classList.add('expanded');
              button.textContent = 'Read more';
          }
      });
  });

  // Modal functionality
  const modal = document.getElementById('modal');
  const modalContent = modal.querySelector('.modal-content');

  document.querySelectorAll('.expand-btn').forEach(button => {
      button.addEventListener('click', (event) => {
          const projectCard = event.target.closest('.project-card');
          const title = projectCard.querySelector('.project-title').textContent;
          const preview = projectCard.querySelector('.project-preview').textContent;
          const details = projectCard.querySelector('.project-details').innerHTML;
          const imgSrc = projectCard.querySelector('img').src;

          // Populate modal content
          modalContent.innerHTML = `
              <h2>${title}</h2>
              <button id="closeModal">&times;</button>
              <img src="${imgSrc}" alt="${title}" style="max-width: 100%; height: auto; margin: 10px 0;">
              <p>${preview}</p>
              <hr>
              ${details}
          `;

          // Show modal
          modal.style.display = 'block';
          document.body.classList.add('modal-open');

          // Close modal button
          document.getElementById('closeModal').addEventListener('click', () => {
              modal.style.display = 'none';
              document.body.classList.remove('modal-open');
          });
      });
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
          document.body.classList.remove('modal-open');
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Expand/Collapse functionality for coding cards
    const expandButtons = document.querySelectorAll('.coding-card .expand-btn');
  
    expandButtons.forEach(button => {
        button.addEventListener('click', event => {
            const codingCard = event.target.closest('.coding-card');
            if (codingCard.classList.contains('expanded')) {
                codingCard.classList.remove('expanded');
                button.textContent = 'Read more';
            } else {
                codingCard.classList.add('expanded');
                button.textContent = 'Show less';
            }
        });
    });
  
    // Modal functionality for coding section
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
  
    document.querySelectorAll('.coding-card .expand-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const codingCard = event.target.closest('.coding-card');
            const title = codingCard.querySelector('.project-title').textContent;
            const preview = codingCard.querySelector('.project-preview').textContent;
            const imgSrc = codingCard.querySelector('img').src;
  
            // Populate modal content
            modalContent.innerHTML = `
                <h2>${title}</h2>
                <button id="closeModal">&times;</button>
                <img src="${imgSrc}" alt="${title}" style="max-width: 100%; height: auto; margin: 10px 0;">
                <p>${preview}</p>
            `;
  
            // Show modal
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
  
            // Close modal button
            document.getElementById('closeModal').addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            });
        });
    });
  
    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
  });
  