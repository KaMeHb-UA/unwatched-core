/*
Templates system
Version: 1.0.0-a
Author: Влад KaMeHb Марченко
License: MIT [ http://www.opensource.org/licenses/mit-license.php ]
*/

var fs = require('fs'),
	exports = module.exports = {};
function Template(){
	this.replace = function(from, to){
		this.text = this.text.replace('{' + from + '}', to);
		return this.text;
	}
	this.do = function(what = {}){
		for(var i in what){
			this.replace(i, what[i]);
		}
		return this.text;
	}
};
exports.sync = function(template, encoding, replacements){
	var a = new Template();
	try {
		a.text = fs.readFileSync(`${global.dirs.__domainDir}/templates/${template}.tpl`, encoding);
	} catch(e){
		a.text = '';
		console.error('LeNode error (1): cannot read template ' + template);
	}
	for(var i in replacements){
		a.replace(i, replacements[i]);
	}
	return a;
};
exports.async = function(template, encoding, replacements, callback){
	fs.readFile(`${global.dirs.__domainDir}/templates/${template}.tpl`, encoding, function(err, contents){
		if(!err){
			var ret = new Template();
			ret.text = contents;
			for(var i in replacements){
				ret.replace(i, replacements[i]);
			}
			callback(null, ret);
		} else {
			console.error('LeNode error (1): cannot read template ' + template);
			callback(err, null);
		}
	});
};