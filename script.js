document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  // validate if exists
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  // REMOVE MENU MOBILE

  const navLink = document.querySelectorAll(".nav__link");

  const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // Click on each nav__link remove class
    navMenu.classList.remove("show-menu");
  };
  navLink.forEach((n) => n.addEventListener("click", linkAction));

  const form = document.getElementById("signup-form");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  // Error message elements
  const passwordError = document.getElementById("passwordError");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting immediately

    let isValid = true;

    // First Name validation
    if (firstName.value.trim() === "") {
      isValid = false;
      console.log("First name is required");
    }

    // Last Name validation
    if (lastName.value.trim() === "") {
      isValid = false;
      console.log("Last name is required");
    }

    // Email validation
    if (!isValidEmail(email.value)) {
      isValid = false;
      console.log("Please enter a valid email address");
    }

    // Phone Number validation
    if (!isValidPhoneNumber(phone.value)) {
      isValid = false;
      console.log("Please enter a valid phone number");
    }

    // Password validation
    if (password.value.length < 8) {
      isValid = false;
      passwordError.classList.add("active");
    } else {
      passwordError.classList.remove("active");
    }

    // If form is valid, log the form data as an object
    if (isValid) {
      const formData = {
        first_name: firstName.value.trim(),
        last_name: lastName.value.trim(),
        email: email.value.trim(),
        phone_number: phone.value.trim(),
        password: password.value,
      };
      console.log(formData);
    }
  });

  // Helper functions
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }

  /*=============== SHOW SCROLL UP ===============*/
  const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // when the scroll is higher than 350 viewport height add the show class
    this.scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  };

  window.addEventListener("scroll", scrollUp);
});
