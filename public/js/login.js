//Login Event
const login = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();
  // Send a POST request to the API endpoint
  if (email && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    // If successful, redirect the browser to the homepage
    if (response.ok) {
      document.location.replace('/');
      // If not successful, alert the user
    } else {
      alert('Failed to login!');
    }
  }
};

//Signup Event
const signup = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#signup-name').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  if (name && password && email) {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Error occured creating account!');
    }
  }
};

//User Interaction
// This is the event listener for the login form
document.querySelector('#button-signup').addEventListener('submit', signup);
// This is the event listener for the signup form
document.querySelector('#button-login').addEventListener('submit', login);
