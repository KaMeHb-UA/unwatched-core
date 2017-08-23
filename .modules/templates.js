/*
Templates system
Version: 1.0.0-a
Author: Влад KaMeHb Марченко
License: MIT [ http://www.opensource.org/licenses/mit-license.php ]
*/

var fs = require('fs');

module.exports = function(template, encoding, replacements){
	this.replace = function(from, to){
		this.text = this.text.replace('{' + from + '}', to);
	}
	try {
		this.text = fs.readFileSync('./templates/' + template + '.tpl', encoding);
	} catch(e){
		this.text = '';
		console.error('LeNode error (1): cannot read template ' + template);
	}
	for(var i in replacements){
		this.replace(i, replacements[i]);
	}
};