// Define a middleware function named auth with parameters req (request), res (response), and next (next middleware function)

const auth = (req, res, next) => {
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }
  next();
};

module.exports = auth;
