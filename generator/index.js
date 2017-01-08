var fs = require('fs');

var indexHtml = fs.readFileSync(__dirname + '/templates/index.html', 'utf8');

var createProjectStructure = function(data) {

	var htmlContent = indexHtml.replace(/{{SITE_TITLE}}/g, data.site_title);

	fs.writeFileSync('index.html', htmlContent, 'utf8');
}

module.exports = createProjectStructure;