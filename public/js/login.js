//Login Event
const login = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  // Send a POST request to the API endpoint

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    // If successful, redirect the browser to the homepage

    if (response.ok) {
      document.location.replace('/');
      // If not successful, alert the user
    } else {
      console.log(response);
      console.log(email, password);
      alert('Faileh to login!');
    }
  }
};

//Signup Event
const signup = async (event) => {
  event.preventDefault();

  // Collect values from the signup form
  const name = document.querySelector('#signup-name').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  // Send a POST request to the API endpoint
  if (name && password && email) {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    // If successful, redirect the browser to the homepage

    if (response.ok) {
      document.location.replace('/');
      // If not successful, alert the user
    } else {
      alert('Error occured creating account!');
    }
  }
};

//User Interaction

// This is the event listener for the login form
document.querySelector('#signup').addEventListener('submit', signup);
// This is the event listener for the signup form
document.querySelector('#login').addEventListener('submit', login);

// Function to show an alert
function showAlert(message, alertId) {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('alert', 'alert-danger', 'mt-3');
  alertContainer.setAttribute('id', alertId);
  alertContainer.textContent = message;

  const closeButton = document.createElement('button');
  closeButton.classList.add('btn', 'close-btn');
  closeButton.textContent = 'x';
  closeButton.addEventListener('click', () => {
    alertContainer.style.display = 'none';
  });

  alertContainer.appendChild(closeButton);
  document.body.appendChild(alertContainer);
}
