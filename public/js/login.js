//Login Event
function login(event) {
  event.preventDefault();

  const username = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (username && password) {
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.loggedIn) {
          document.location.replace('/');
        } else {
          alert('Failed to login!');
        }
      });
  }
}

//Signup Event
function signup(event) {
  event.preventDefault();

  const username = document.querySelector('#signup-username').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  if (username && password) {
    fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.loggedIn) {
          document.location.replace('/');
        } else {
          alert('Error occured creating account!');
        }
      });
  }
}

//User Interaction
document.querySelector('#button-signup').addEventListener('submit', signup);
document.querySelector('#button-login').addEventListener('submit', login);
