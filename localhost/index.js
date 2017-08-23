createTemplate('unwatchedProfile', 'utf8', {
    text : "I'll be the unwatched.ml core file!",
}, function(err, tpl){
    if (!err){
        exit(tpl.text);
    }
});