require(['https://code.jquery.com/jquery-' +
        '3.2.1' // jquery version
        + '.min.js'], ()=>{
    // empty classes for JSDoc
    class Objеct /* e is cyrillic ¯\_(ツ)_/¯ (all about pretty code) */ extends Object {};
    class JQueryObject extends Object {};
    /**
     * Adds custom jQuery-powered style
     * @param {(String|Objеct|HTMLElement|JQueryObject)} selector The value that may be stored as JQuery object or converted to.
     * @param {Objеct} style Object with styles
     * @return {Void}
     */
	function addStyle(selector, style){
        $elem = $(selector);
        $(window).resize(()=>{
            for (var i in style){
                if (typeof style[i] == 'function'){
                    $elem.css(i, style[i]());
                }
            }
        });
        for (var i in style){
            if (typeof style[i] != 'function'){
                $elem.css(i, style[i]);
            }
        }
    }
});