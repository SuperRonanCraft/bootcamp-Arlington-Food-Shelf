// Function to create and display an alert
function showAlert(message, alertType) {
  // Create the alert element
  const alertContainer = createAlertElement(message, alertType);

  // Get the appropriate container based on alert type
  const container = document.querySelector(`#${alertType}-container`);

  if (!container) {
    console.error(`Container with ID #${alertType}-container not found.`);
    return;
  }

  container.appendChild(alertContainer);
}

function createAlertElement(message, alertType) {
  // Create the alert container with classes
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('alert', `alert-${alertType}`, 'mt-3');

  // Set the alert message
  alertContainer.textContent = message;

  // Create and configure the close button
  const closeButton = document.createElement('button');
  closeButton.classList.add('btn', 'close-btn');
  closeButton.textContent = 'x';
  closeButton.addEventListener('click', () => {
    alertContainer.style.display = 'none';
  });

  alertContainer.appendChild(closeButton);

  return alertContainer;
}

// Function to check for empty input fields (DRY principle)
function checkEmptyInputs(nameInput, emailInput, passwordInput) {
  return (
    nameInput.value.trim() === '' ||
    emailInput.value.trim() === '' ||
    passwordInput.value.trim() === ''
  );
}

// Login function
async function login(event) {
  event.preventDefault();

  // Collect values from the login form
  const emailInput = document.querySelector('#login-email');
  const passwordInput = document.querySelector('#login-password');

  if (checkEmptyInputs(emailInput, passwordInput)) {
    showAlert('Please enter both email and password.', 'login');
    return;
  }

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const response = await fetch('/api/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    document.location.replace('/'); // Redirect on successful login (adjust as needed)
  } else {
    // Handle login error with more informative message
    const errorJson = await response.json();
    showAlert(errorJson.message || 'Failed to login!', 'login');
  }
}

// Signup function (similar improvements)
async function signup(event) {
  event.preventDefault();

  // Collect values from the signup form
  const nameInput = document.querySelector('#signup-name');
  const emailInput = document.querySelector('#signup-email');
  const passwordInput = document.querySelector('#signup-password');

  if (checkEmptyInputs(nameInput, emailInput, passwordInput)) {
    showAlert('Please enter a name, email, and password.', 'signup');
    return;
  }

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  if (response.ok) {
    document.location.replace('/'); // Redirect on successful signup (adjust as needed)
  } else {
    // Handle signup error with more informative message
    const errorJson = await response.json();
    showAlert(errorJson.message || 'Error occured creating account!', 'signup');
  }
}

// User Interaction (assuming containers exist)
document.querySelector('#signup').addEventListener('submit', signup);
document.querySelector('#login').addEventListener('submit', login);
