requirejs.config({
    urlArgs: Date.now(), // no cache
    paths: {
        components: 'app/components',
        models: 'app/models',
        services: 'app/services',
        
        jquery: 'vendor/jquery/jquery',
        kage: 'vendor/kage.js/kage',
        bootstrap: 'vendor/bootstrap/bootstrap'
    },
    
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});

require([
    'kage',
    'config/application'
],
// main application function (starter)
function(kage) {
    
});


