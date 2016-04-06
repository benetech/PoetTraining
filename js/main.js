// Reference:
// Require.js allows us to configure shortcut alias
// Their usage will become more apparent further along in the tutorial.
require.config({
    paths: {
        jquery: 'js/libs/jquery/jquery-2.2.0.min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone'
        //templates: '../templates'
    }

});

require([
    // Load our app module and pass it to our definition function
    'app',

], function(App){
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
});