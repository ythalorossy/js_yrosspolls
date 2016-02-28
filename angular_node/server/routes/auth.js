module.exports = function(app) {
    
    var passport = require('passport');

    app.get('/auth', function (req, res, next){
        res.render('oauth');
    });
    
    // Redirect the user to Facebook for authentication.  When complete,
    // Facebook will redirect the user back to the application at
    //     /auth/facebook/callback
    app.get('/auth/facebook', passport.authenticate('facebook'));

    // Facebook will redirect the user to this URL after approval.  Finish the
    // authentication process by attempting to obtain an access token.  If
    // access was granted, the user will be logged in.  Otherwise,
    // authentication has failed.
    app.get('/auth/facebook/callback', passport.authenticate('facebook', 
                                                             {  successRedirect: '/',
                                                                failureRedirect: '/auth' }));
    
    // Redirect the user to Google for authentication.  When complete, Google
    // will redirect the user back to the application at
    //     /auth/google/return
    app.get('/auth/google', passport.authenticate('google', { scope: 'email' }));

    // Google will redirect the user to this URL after authentication.  Finish
    // the process by verifying the assertion.  If valid, the user will be
    // logged in.  Otherwise, authentication has failed.
    app.get('/auth/google/callback', passport.authenticate('google', 
                                                         { successRedirect: '/',
                                                          failureRedirect: '/auth' }));    
    
    app.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
    });
    
};