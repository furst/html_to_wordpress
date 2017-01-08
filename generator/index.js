var fs = require('fs');
var path = require('path');
let cheerio = require('cheerio');
let $ = cheerio.load(fs.readFileSync('index.html', 'utf8'));

//var indexHtml = fs.readFileSync(__dirname + '/templates/index.html', 'utf8');

var createProjectStructure = function(data) {

	if (!fs.existsSync('./wp')){
    	fs.mkdirSync('./wp');
	}

	fromDir('./', '.html', function(filename){
    	console.log('-- found: ', filename);
    	let $ = cheerio.load(fs.readFileSync(filename, 'utf8'));
    	console.log($('#root').data('wp-menu'));
    	//console.log($.html());
    	console.log('______________________________________');
    	fs.writeFileSync('./wp/index.php', $, 'utf8');
	});

	// $('h2').text('welcome');

	// console.log($.html());

	// var htmlContent = indexHtml.replace(/{{SITE_TITLE}}/g, data.site_title);

	// fs.writeFileSync('index.html', htmlContent, 'utf8');
}

function fromDir(startPath, filter, callback){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log('no dir ', startPath);
        return;
    }
    var files = fs.readdirSync(startPath);
    for(var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename, filter, callback); //recurse
        }
        else if (filename.indexOf(filter) >= 0) callback(filename);
    };
};

module.exports = createProjectStructure;