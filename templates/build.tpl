({
    appDir: "public_html/",
    baseUrl: "js/",
    dir: "build",
    logLevel: 0,
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
    },

    modules: [
        {
            name: "main"
        }
    ]
})