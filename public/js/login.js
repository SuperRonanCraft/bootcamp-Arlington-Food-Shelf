//Login Event
const login = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      document.location.replace('/');
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
document.querySelector('#button-signup').addEventListener('submit', signup);
document.querySelector('#button-login').addEventListener('submit', login);
