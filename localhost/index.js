createTemplate('unwatchedProfile', 'utf8', {
    title : "Core file",
    favicon : "/favicon.ico",
    mainCSSFile : "/css/style.css",
    mainJSFile : "/js/main.js",
}, function(err, tpl){
    if (!err){
        tpl.do({
            text : "I'll be the core file!",
        });
        exit(tpl.text);
    }
});