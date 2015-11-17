#!/usr/bin/env node
var args = process.argv.splice(2);
var printUsage = function() {
    console.log("Usage:");
    console.log("    burjs [init|server|build|model|component|view|install] [<name>|<port>]\n");
    console.log("    burjs init - create a project in the current directory");
    console.log("    burjs server <port> - start listening for http requests " +
                "using current directory as document root");
    console.log("    burjs build [<build.js>] - builds the project by using r.js." +
                " For more info: http://requirejs.org/docs/optimization.html");
    console.log("    burjs model (<folder>/<ModelName>|<ModelName>) - "+
                "generates a model in js/app/models.");
    console.log("    burjs service (<folder>/<ServiceName>|<ServiceName>) - "+
                "generates a service in js/app/services.");
    console.log("    burjs component (<folder>/<ComponentName>|<ComponentName>) - "+
                "generates a component in js/app/components.");
    console.log("    burjs view (<folder>/<ViewName>|<ViewName>) - "+
                "generates a view in js/app/templates.");
};

var commands = [
    'init',
    'install',
    'server',
    'build',
    'model',
    'component',
    'service',
    'view'
];

var allowedTypes = {
    'model': {
        suffix: 'Model',
        path: process.cwd() + '/src/js/app/models/',
        ext: '.js'
    }, 
    'service': {
        suffix: 'Service',
        path: process.cwd() + '/src/js/app/services/',
        ext: '.js'
    }, 
    'component': {
        suffix: 'Component',
        path: process.cwd() + '/src/js/app/components/',
        ext: '.js'
    },
    
    'view': {
        suffix: null,
        path: process.cwd() + '/src/js/app/templates/',
        ext: '.ejs'
    }
};

if(args.length < 1) {
    printUsage();
    process.exit();
}

if(commands.indexOf(args[0]) === -1) {
    printUsage();
    process.exit();
}

if((args[0] !== 'init' && args[0] !== 'build' && args[0] !== 'install') && args.length < 2) {
    printUsage();
    process.exit();
}

var generate = function(type, filename) {
    if(!allowedTypes[type]) {
        console.error("Undefined type: " + type);
    }
    
    var fs = require('fs');
    var typeSuffix = allowedTypes[type].suffix;
    var filePath = allowedTypes[type].path;
    var extension = allowedTypes[type].ext;
    
    
    var template = fs.readFileSync(__dirname + '/templates/' + type + '.tpl',{
        encoding: 'utf8'
    });
    
    var fileName = filename;
    if(fileName.indexOf('/') !== -1) {
        var path = filename.split('/');
        fileName = path[path.length - 1];
        for(var i = 0; i < path.length - 1; i++) {
            filePath += path[i] + '/';
            if(!fs.existsSync(filePath)) {
                fs.mkdir(filePath);
            }
        }
    }

    if(typeSuffix !== null && !(new RegExp(typeSuffix+'$')).test(fileName)) {
        fileName += typeSuffix;
    }
    
    template = template.replace(/\$\(name\)/g, fileName);
    var generatedFile = filePath + fileName + extension;
    
    if(fs.existsSync(generatedFile)) {
        console.error('File exists: ' + generatedFile);
        proccess.exit();
    }
    
    fs.writeFileSync(generatedFile, template);
    
    console.log(generatedFile + ' - Created');
};

var printProjectStructure = function() {
    console.log("+-css/");
    console.log("+-js/");
    console.log("| +--app/");
    console.log("| |  +--services/");
    console.log("| |  +--models/");
    console.log("| |  +--components/");
    console.log("| |  |  +--BaseComponent.js");
    console.log("| |  +--templates/");
    console.log("| +--config/");
    console.log("| |  +--application.js");
    console.log("| +--vendor/");
    console.log("| +--main.js");
    console.log("+-resources/");
    console.log("+-scss/");
    console.log("+-index.html");
    console.log("+-build.js");
};

switch (args[0]) {
    case 'init':
        
        var wrench = require('wrench');
        var fs = require('fs');
        var exec = require('child_process').exec;
        
        if(fs.existsSync('./.bur_project')) {
            console.error('Already a bur.js project.');
            process.exit();
        }
        
        console.log("\nGenerating source folder: ");
        
        wrench.copyDirSyncRecursive(__dirname + '/templates/project/src', process.cwd()+'/src', 
        {
            forceDelete: true
        });
        
        
        var buildTemplate = fs.readFileSync(__dirname + '/templates/build.tpl',{
            encoding: 'utf8'
        });
        
        var bowerFile = fs.readFileSync(__dirname + '/templates/bower.json',{
            encoding: 'utf8'
        });
        
        fs.writeFileSync('./build.js', buildTemplate);
        fs.writeFileSync('./bower.json', bowerFile);
        fs.writeFileSync('./.bur_project', '');
        
        printProjectStructure();
        
        console.log("\nInstalling Dependencies: ");
        exec(__dirname + "/node_modules/.bin/bower-installer", function(error, stdout, stderr) {
            console.log(stdout);
            
            console.log("\nBurJS Project Generated.");
        });
        
        
        break;
    case 'build':
        var exec = require("child_process").exec;
        
        exec(__dirname + "/node_modules/.bin/r.js -o build.js", function(error, stdout, stderr) {
            console.log(stdout);
        });
        break;
    case 'server':
        var connect = require('connect');
        var http = require('http');
        var serveStatic = require("serve-static");
        var morgan = require("morgan");
        
        var server = connect().
                use(serveStatic(process.cwd())).
                use(morgan('combined'));
        
        http.createServer(server).
                listen(args[1]);
        
        console.log('Listening on port ' + args[1]);
        console.log('Document root is ' + process.cwd());
        console.log('Press Ctrl-C to quit');
        break;
    case 'install':
        var exec = require("child_process").exec;
        
        exec(__dirname + "/node_modules/.bin/bower-installer", function(error, stdout, stderr) {
            console.log(stdout);
        });
        break;
    default:
        generate(args[0], args[1]);
        break;
}

