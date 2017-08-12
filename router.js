module.exports = [
    [ /.*\/\.indexes\/?$/, '/403.code' ],
    [ '/router.js', '/403.code' ],
    [ '/server.js', '/403.code' ],
    [ '/core.js', '/403.code' ],
    [ /(.*\.js)\/*$/, '/$1', true /* all .js files is now executable from own url and url with slashes at the end */],
]