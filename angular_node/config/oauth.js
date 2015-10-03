
module.exports = function (app) {

    var passport = require('passport')
      , FacebookStrategy = require('passport-facebook').Strategy
      , TwitterStrategy  = require('passport-twitter').Strategy
      , GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;

    app.use(passport.initialize());
    app.use(passport.session());
    
    /********************
    * Facebook Strategy *
    ********************/
    passport.use(new FacebookStrategy({
        clientID: '1077025878988589',
        clientSecret: '126390ef1adc5444b33e9e08515cc1e5',
        callbackURL: "http://yrosspoll.com.br:3000/auth/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            
            done(null, {
                "_id": 99696999,
                "login": profile.username, 
                "nome": "Ythalo Rossy S. Lira"});
        }
    ));

    
    /*******************
    * Twitter Strategy *
    *******************/
    passport.use(new TwitterStrategy({
        consumerKey: "TWITTER_CONSUMER_KEY",
        consumerSecret: "TWITTER_CONSUMER_SECRET",
        callbackURL: "http://yrosspoll.com.br:3000/auth/twitter/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, {
            "_id": 99696999,
            "login": profile.username, 
            "nome": "Ythalo Rossy S. Lira"});
        }
    ));

    /******************
    * Google Strategy *
    ******************/    
    passport.use(new GoogleStrategy({
        clientID: "768512486628-in564djd0ada8p0e0g2uvfjeemu03fdg.apps.googleusercontent.com",
        clientSecret: "vsIfdhxONaMDw9920ohtmLA9",
        callbackURL: "http://yrosspoll.com.br:3000/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        done(null, {
            "_id": 99696999,
            "login": profile.username, 
            "nome": "Ythalo Rossy S. Lira"});
        }
    ));
    
    
    passport.serializeUser(function(usuario, done){
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done){
        // Simulate: findById in database
        done(null, {
                "_id": 99696999,
                "login": "ythalorossy", 
                "nome": "Ythalo Rossy S. Lira"});
    });
};