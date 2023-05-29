// Get references to the form elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const confirmationContainer = document.getElementById('confirmationContainer');

// Function to validate email address
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Function to handle form submission
function submitForm() {
  // Retrieve user inputs
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Perform validations
  if (name === '') {
    displayErrorMessage('Please enter your name.');
    return;
  }

  if (email === '') {
    displayErrorMessage('Please enter your email.');
    return;
  }

  if (!validateEmail(email)) {
    displayErrorMessage('Please enter a valid email address.');
    return;
  }

  if (message === '') {
    displayErrorMessage('Please enter your message.');
    return;
  }

  // Send the data to the given email address (replace 'YOUR_EMAIL_ADDRESS' with the actual email address)
  const emailContent = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  const emailSubject = 'New Contact Form Submission';
  const emailLink = `mailto:jasondsouza6150@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailContent)}`;

  // Attempt to send the email
  try {
    window.location.href = emailLink;
    displayConfirmationMessage('Thank you for your submission! We will get back to you soon.');
  } catch (error) {
    displayErrorMessage('An error occurred while sending the email. Please try again later.');
  }

  // Reset form fields
  form.reset();
}

// Function to display confirmation message
function displayConfirmationMessage(message) {
  const confirmationMessage = document.createElement('p');
  confirmationMessage.textContent = message;
  confirmationContainer.appendChild(confirmationMessage);
}

// Function to display error message
function displayErrorMessage(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessage.classList.add('error');
  confirmationContainer.appendChild(errorMessage);
}

// Add form submission event listener
form.addEventListener('submit', function (event) {
  event.preventDefault();
  submitForm();
});
