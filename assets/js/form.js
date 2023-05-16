window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      submitForm();
      form.reset();
    }
  });

  function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    if (name === '') {
      showError(nameInput, 'Please enter your name');
      isValid = false;
    } else {
      hideError(nameInput);
    }

    if (email === '') {
      showError(emailInput, 'Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError(emailInput, 'Please enter a valid email');
      isValid = false;
    } else {
      hideError(emailInput);
    }

    if (message === '') {
      showError(messageInput, 'Please enter your message');
      isValid = false;
    } else {
      hideError(messageInput);
    }

    return isValid;
  }

  function showError(input, errorMessage) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) {
      errorElement.textContent = errorMessage;
    } else {
      const errorElement = document.createElement('p');
      errorElement.classList.add('error-message');
      errorElement.textContent = errorMessage;
      formGroup.appendChild(errorElement);
    }

    formGroup.classList.add('has-error');
  }

  function hideError(input) {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.error-message');

    if (errorElement) {
      formGroup.removeChild(errorElement);
    }

    formGroup.classList.remove('has-error');
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function submitForm() {
    // Perform form submission logic
    console.log('Form submitted successfully');
  }
});
