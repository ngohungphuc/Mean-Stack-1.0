//export function render so we can call function anywhere
exports.render = function(req, res) {
	//look for index.ejs file in view folder
	res.render('index', {
		title : 'Hello world'
	})
};