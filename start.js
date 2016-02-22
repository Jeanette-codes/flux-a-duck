const exec = require('child_process').exec;

const child = new Promise(function(resolve, reject) {
    exec('./node_modules/babel-cli/bin/babel.js src -d lib',
        function (error, stdout, stderr) {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
                reject();
            }
            resolve();
        }
    );
});

child.then(function() {
    exec('ls -a', function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    }
)});

    // this is the command to compile that shit
    // ./node_modules/babel-cli/bin/babel.js src -d lib
