requirejs.config({
    urlArgs: Date.now(), // no cache
    paths: {
        text: 'vendor/requirejs-text/text',
        
        components: 'app/components',
        models: 'app/models',
        services: 'app/services',
        
        jquery: 'vendor/jquery/jquery',
        bur: 'vendor/burjs/bur',
        bootstrap: 'vendor/bootstrap/bootstrap'
    },
    
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require([
    'bur',
    'bootstrap',
    'config/application'
],
// main application function (starter)
function(bur) {
    
});


