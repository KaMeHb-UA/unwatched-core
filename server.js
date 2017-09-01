var spawn = require('child_process').spawn;
    
if (/^win/.test(process.platform)) spawn('cmd', ['/s', '/c', 'node nodemon | cmdcolor'],{stdio:'inherit'}); else {
    /*
    spawn('node', ['nodemon'],{stdio:'inherit'});
    /*/
    spawn('exec', ['"node nodemon >> ./cmdcolor 2>&1"'],{stdio:'inherit'});
    //*/
}