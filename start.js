const exec = require('child_process').exec;
const chokidar = require('chokidar');
const colors = require('colors/safe');


const getSeconds = function(milliseconds) {
    return (milliseconds/1000/60).toFixed(2);
}

const babelCompiledMessage = function(milliseconds) {
    return 'compiled in ' + milliseconds + ' milliseconds ('+ getSeconds(milliseconds) + ' seconds)';
}

const babel = function(fileName) {

    return new Promise(function(resolve, reject) {

        if(!fileName) { 
            cliOptions = 'src -d lib'; 
        } else {
            cliOptions = fileName + ' --out-file ' + fileName.replace('src','lib');
        }

        exec('./node_modules/babel-cli/bin/babel.js ' + cliOptions,
            function (error, stdout, stderr) {
                if(!fileName) console.log(colors.green(stdout));
                if (error !== null) {
                    console.log(colors.red(error));
                    reject();
                }
                resolve();
            }
        );
    });
}


// build steps

babel().then(function(){
    console.log('Watching has started');
});

chokidar.watch('./src', {ignored: /[\/\\]\./}).on('change', function(path, stats) {

    var start = new Date(); 

    if (stats) { 
        console.log(path + ' was changed to be ' + stats);
    } else {
        console.log(path + ' was changed.');
    }


    babel(path).then(function(){
        var end = new Date();
        var mill = end.getTime() - start.getTime();
        console.log(colors.green(babelCompiledMessage(mill)));
    });
});

