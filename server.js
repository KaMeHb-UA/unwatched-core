var spawn = require('child_process').spawn;
    
if (/^win/.test(process.platform)) spawn('cmd', ['/s', '/c', 'node nodemon | cmdcolor'],{stdio:'inherit'}); else {
    /*
    spawn('node', ['nodemon'],{stdio:'inherit'});
    /*/
    require('fs').chmodSync('./cmdcolor', '+x');    
    spawn('bash', ['-c','"node nodemon | ./cmdcolor"'],{stdio:'inherit'});
    //*/
}