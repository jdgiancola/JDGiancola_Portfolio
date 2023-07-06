// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Set the size of the first portfolio item larger
const portfolioItems = document.querySelectorAll(".portfolio-item");
if (portfolioItems.length > 0) {
  portfolioItems[0].classList.add("featured");
}

// Open deployed application on image click
const portfolioImages = document.querySelectorAll(".portfolio-item img");
portfolioImages.forEach((image) => {
  image.addEventListener("click", function () {
    const deployedAppURL = this.dataset.deployedAppUrl;
    if (deployedAppURL) {
      window.open(deployedAppURL, "_blank");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here, you can perform additional validation or data processing if needed

    // Display a success message
    const successMessage = document.createElement("p");
    successMessage.textContent = "Message sent successfully!";
    successMessage.style.color = "green";
    contactForm.appendChild(successMessage);

    // Reset the form after submission
    contactForm.reset();
  });
});
