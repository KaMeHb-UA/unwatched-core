try{
    createTemplate('unwatchedProfile', 'utf8', {
        title : 'Core file',
        favicon : '/favicon.ico',
        mainCSSFile : '/css/style.css',
        requireJSFile : '/js/require.js',
        mainJS : 'js/main'
    }, function(err, tpl){
        if (!err){
                tpl.do({
                    text : "I'll be the core file!",
                });
                exit(tpl.text);
        } else {
            console.error(err);
        }
    });
} catch(e){
    console.error(e);
}