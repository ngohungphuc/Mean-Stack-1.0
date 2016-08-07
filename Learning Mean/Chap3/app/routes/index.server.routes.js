// require index controller then use index.render
//  to call function render
module.exports = function(app) {
	var index = require('../controllers/index.server.controller');
	app.get('/', index.render);
};