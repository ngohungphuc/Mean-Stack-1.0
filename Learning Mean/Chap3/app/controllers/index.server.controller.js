//export function render so we can call function anywhere
exports.render = function(req, res) {
	if (req.session.lastVisit) {
		console.log(req.session.lastVisit);
	}
	req.session.lastVisit = new Date();
	
	//look for index.ejs file in view folder
	res.render('index', {
		title : 'Hello world'
	})
};