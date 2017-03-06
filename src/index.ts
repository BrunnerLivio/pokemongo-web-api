import 'es6-shim';
import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import './Controllers/PokemonController';

let app = createExpressServer();
app.listen(3000);