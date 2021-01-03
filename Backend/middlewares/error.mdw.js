module.exports = function (app) {
  app.use(function (req, res) {
    //send json here
  });

  // default error handler
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    // send json here
  })
}