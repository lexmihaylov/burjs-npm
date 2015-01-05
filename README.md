![BurJS](https://raw.githubusercontent.com/lexmihaylov/burjs/master/burjs.png)
=======
An npm package for the [BurJS](https://github.com/lexmihaylov/burjs) library. This package incudes: 
 * initializin BurJS project folder;
 * generators for Views, Models, Components and Services;
 * static http server;
 * build function by using requirejs;
 * dependency installation.

##Installation

    npm install -g lexmihaylov/burjs-npm

##Usage

__Creating project__

    mkdir my_project
    cd my_project
    burjs init
    
__Generators__

    cd my_project
    burjs <model|component|view|service> <ClassName>
    
__Starting a static http server__

    cd my_project/src
    burjs server 8080
    
__Building your project__

    cd my_project
    burjs build
    
This will create a build of your project in my_project/build. For more info: http://requirejs.org/docs/optimization.html.

__Installing components via bower__

    bower install vue
After the bower package has been istalled you need to run:
    burjs install # this will install all the main files listed in bower.json to src/js/vendor