({
    appDir: "./",
    baseUrl: "js/",
    dir: "build",
    logLevel: 0,
    paths: {
        text: 'vendor/requirejs-text/text',
    
        components: 'app/components',
        models: 'app/models',
        services: 'app/services',
        
        jquery: 'vendor/jquery/jquery',
        kage: 'vendor/kage.js/kage',
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

    modules: [
        {
            name: "main"
        }
    ]
})