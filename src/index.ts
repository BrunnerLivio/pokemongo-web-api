import 'es6-shim';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import './Controllers/PokemonController';
import * as chalk from 'chalk';

let app = createExpressServer();
console.log(`Listening on port ${chalk.green('8080')}`);

app.listen(8080);