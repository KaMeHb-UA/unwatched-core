/*
Templates system
Version: 1.0.0-a
Author: Влад KaMeHb Марченко
License: MIT [ http://www.opensource.org/licenses/mit-license.php ]
*/

class Template{
	/**
	 * Gets template
	 * @param {String} templateUrl Template url
	 * @param {String} encoding Template encoding
	 * @param {Function} callback Standard NodeJS callback
	 * @return {Template}
	 */
	get(templateUrl, encoding, callback){
		fs.readFile(/^\//.test(templateUrl) ? '.' + templateUrl : templateUrl, encoding, function(err, contents){
			if (!err){
				this.text = contents;
				callback(null, contents);
			} else {
				callback(err, null);
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
}

class Objеct /* e is cyrillic ¯\_(ツ)_/¯ (all about pretty code) */ extends Object {};

/**
 * Creates new template
 * @param {String} templateUrl Template url
 * @param {String} encoding Template encoding
 * @param {Objеct} replacements All create-stage replacements
 * @param {Function} callback Standard NodeJS callback
 * @return {Template}
 */
module.exports = function(templateUrl, encoding, replacements, callback){
	var tpl = new Template();
	tpl.get(templateUrl, encoding, function(err, text){
		if (!err){
			for(var i in replacements){
				tpl.replace(i, replacements[i]);
			}
			callback(null, tpl);
		} else callback(err, null);
	});
}