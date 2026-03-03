const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // You can extend this to send data to a server or email API later
  alert("Thank you for contacting us! We will get back to you soon.");

  contactForm.reset();
});
