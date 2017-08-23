//*
createTemplate('unwatchedProfile', 'utf8', {
    text : "I'll be the unwatched.ml core file!",
}, function(err, tpl){
    if (!err){
        console.log(tpl);
        exit(tpl.text);
    }
});
//*/
/*
var tpl = new Template('unwatchedProfile', 'utf8', {
    text : "I'll be the unwatched.ml core file!",
});
console.log(tpl);
exit(tpl.text);
//*/