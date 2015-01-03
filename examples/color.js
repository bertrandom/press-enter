var pressEnter = require('../index.js');

pressEnter({color: 'magenta'}, function() {
	process.exit();
});