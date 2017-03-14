var https = require('https');
var fs = require('fs');
var path = require('path');

var lastestPokemonPath = 'https://raw.githubusercontent.com/BrunnerLivio/pokemongo-data-normalizer/master/output/pokemon.json';
var dir = path.join(__dirname, '../src/Data');
var file = path.join(dir, 'Pokemon.json');
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}


var file = fs.createWriteStream(file);
var request = https.get(lastestPokemonPath, function (response) {
	response.pipe(file);
});
