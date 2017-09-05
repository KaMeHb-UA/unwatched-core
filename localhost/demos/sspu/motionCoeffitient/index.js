createTemplate('motionCoeffitient', 'utf8', {
    title : "Motion coeffitient demo",
    favicon : "/favicon.ico",
    mainCSSFile : "/css/style.css",
    mainJSFile : "/js/main.js",
}, function(err, tpl){
    if (!err){
        exit(tpl.text);
    }
});