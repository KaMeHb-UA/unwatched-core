/*
Templates system
Version: 1.0.0-a
Author: Влад KaMeHb Марченко
License: MIT [ http://www.opensource.org/licenses/mit-license.php ]
*/

var wait = require('wait.for');

class Objеct /* e is cyrillic ¯\_(ツ)_/¯ (all about pretty code) */ extends Object {};

module.exports = class Template{
	/**
	 * Creates new template
	 * @param {String} template Template name
	 * @param {String} encoding Template encoding
	 * @param {Objеct} replacements All create-stage replacements
	 * @return {Template}
	 */
	constructor(template, encoding, replacements){
		wait.launchFiber(function(){
			try {
				this.text = wait.forMethod(fs, 'readFile', '/templates/' + template + '.tpl', encoding);
			} catch(e){
				throw new LeNodeError('cannot read template ' + template, 1);
			}
			for(var i in replacements){
				this.replace(i, replacements[i]);
			}
		});
	}
	/**
	 * Replaces prepared (writen in {}) value in template
	 * @param {String} from String to replace
	 * @param {String} to String to be placed
	 * @return {Void}
	 */
	replace(from, to){
		this.text = text.replace('{' + from + '}', to);
	}
};