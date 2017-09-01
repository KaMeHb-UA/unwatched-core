var spawn = require('child_process').spawn;
    
if (/^win/.test(process.platform)) spawn('cmd', ['/s', '/c', 'node nodemon | cmdcolor'],{stdio:'inherit'}); else {
    spawn('node', ['nodemon']).on('data', function(data){
        process.stdout.write('stdout: ' + data);
    });
} ;