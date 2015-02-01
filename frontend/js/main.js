require.config({
    // alias libraries paths
    paths : {
        'jquery':               '../bower_components/jquery/dist/jquery',
        'twitter.bootstrap':    '../bower_components/bootstrap/dist/js/bootstrap',
        'domReady':             '../bower_components/requirejs-domready/domReady',
        'angular' :             '../bower_components/angular/angular',
        'angular-resource':     '../bower_components/angular-resource/angular-resource',
        'angular-route':        '../bower_components/angular-route/angular-route',
    },
    
    // angular does not support AMD out of the box, put it in a shim
    shim : {
        'angular'               :   {exports : 'angular'},
        'angular-resource'      :   {exports : 'angular-resource'},
        'jquery'                :   {exports : 'jquery'},
        'twitter.bootstrap'     :   ['jquery'],
        'angular-resource'      :   ['angular'],
        'angular-route'         :   ['angular', 'angular-resource']
    },
    
    // kick start application
    deps : ['./bootstrap']

});