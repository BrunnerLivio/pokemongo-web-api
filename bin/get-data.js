var https = require('https');
var fs = require('fs');
var path = require('path');

var paths = [{
		url: 'https://raw.githubusercontent.com/BrunnerLivio/pokemongo-data-normalizer/master/output/pokemon.json',
		path: 'Pokemon.json'
	},

	{
		url: 'https://raw.githubusercontent.com/BrunnerLivio/pokemongo-data-normalizer/master/output/move.json',
		path: 'Move.json'
	}
];
var dir = path.join(__dirname, '../src/shared');
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}


var counter = 0;

function getFile() {
	console.log(`Fetch ${paths[counter].path}`)
	var file = path.join(dir, paths[counter].path);
	var file = fs.createWriteStream(file);

	https.get(paths[counter].url, function (response) {
		response.pipe(file);
		counter++;
		if (counter < paths.length) {
			getFile();
		}
	});
}

getFile();
