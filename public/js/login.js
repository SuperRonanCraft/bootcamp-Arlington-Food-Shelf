//Login Event
function login(event) {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
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

  const name = document.querySelector('#signup-name').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  if (name && password && email) {
    console.log('test');
    fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
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
