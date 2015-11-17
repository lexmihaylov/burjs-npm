({
    appDir: "./src/",
    baseUrl: "./js/",
    dir: "./build/",
    logLevel: 0,
    paths: {
        text: 'vendor/requirejs-text/text',
    
        components: 'app/components',
        models: 'app/models',
        services: 'app/services',
        templates: 'app/templates',
        
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
    },

    modules: [
        {
            name: "main"
        }
    ]
})