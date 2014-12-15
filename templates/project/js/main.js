requirejs.config({
    urlArgs: Date.now(), // no cache
    paths: {
        components: 'app/components',
        models: 'app/models',
        services: 'app/services',
        
        jquery: 'libs/jquery'
    },
    
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});

require([
    'libs/kage',
    'config/application'
],
// main application function (starter)
function(kage) {
    
});


