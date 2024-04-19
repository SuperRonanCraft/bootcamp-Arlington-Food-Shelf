const loginAlert = document.querySelector('#alert-login');
const signupAlert = document.querySelector('#alert-signup');

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
      setTimeout(() => document.location.replace('/stock'), 500);
      // If not successful, alert the user
    } else {
      console.log(response);
      console.log(email, password);
      loginAlert.style.visibility = 'visible';
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
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      // If successful, redirect the browser to the homepage

      if (response.ok) {
        setTimeout(() => document.location.replace('/stock'), 500);
        // If not successful, alert the user
      } else {
        signupAlert.style.visibility = 'visible';
      }
    } catch (err) {
      console(err);
    }
  }
};

//User Interaction

// This is the event listener for the login form
document.querySelector('#signup').addEventListener('submit', signup);
// This is the event listener for the signup form
document.querySelector('#login').addEventListener('submit', login);
