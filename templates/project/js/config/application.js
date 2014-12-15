define(['libs/kage'], function(kage) {
    kage.config({
        baseDir: 'js/',
        urlArgs: Date.now(),
        cssPath: 'css/',
        imagePath: 'css/images',
        resourcePath: 'resources/'
    });
    
    return kage;
});