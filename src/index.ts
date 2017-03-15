import 'es6-shim';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import './Controllers/PokemonController';
import * as chalk from 'chalk';

const PORT = (process.env.PORT || 5000);

let app = createExpressServer();
console.log(`Listening on port ${chalk.green(PORT)}`);

app.listen(PORT);