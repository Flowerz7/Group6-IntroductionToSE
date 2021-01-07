module.exports = function(app) {
    app.use('/', require('../routes/index.route'));
    app.use('/profile', require('../routes/user_profile.route'));
}