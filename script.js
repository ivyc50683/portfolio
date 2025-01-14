document.addEventListener("DOMContentLoaded", () => {
  // Social links tracking
  const socialLinks = document.querySelectorAll(".social-link");

  socialLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      console.log(`Navigating to: ${event.target.textContent}`);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Expand/Collapse functionality for projects
  const expandButtons = document.querySelectorAll(".expand-btn");

  expandButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const projectCard = event.target.closest(".project-card");
      if (projectCard.classList.contains("expanded")) {
        projectCard.classList.remove("expanded");
        button.textContent = "Read more";
      } else {
        projectCard.classList.add("expanded");
        button.textContent = "Read more";
      }
    });
  });

  // Modal functionality
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");

  // Handle all card buttons (previously expand-btn)
  document.querySelectorAll("button.card-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".content-card");
      const title = card.querySelector(".section-title").textContent;
      const preview = card.querySelector(".section-description").textContent;
      const details = card.querySelector(".project-details")?.innerHTML || ""; // Optional chaining in case details don't exist
      const imgSrc = card.querySelector("img")?.src;

      // Populate modal content
      modalContent.innerHTML = `
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button id="closeModal">&times;</button>
                </div>
                ${
                  imgSrc
                    ? `<img src="${imgSrc}" alt="${title}" style="max-width: 100%; height: auto; margin: 10px 0;">`
                    : ""
                }
                <p>${preview}</p>
                ${details ? `<hr>${details}` : ""}
            `;

      // Show modal
      modal.style.display = "block";
      document.body.classList.add("modal-open");

      // Close modal button
      document.getElementById("closeModal").addEventListener("click", () => {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
      });
    });
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
});
