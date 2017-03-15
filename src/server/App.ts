import { log } from 'util';
import * as path from 'path';
import 'reflect-metadata';

import './controllers/PokemonController';

import { useExpressServer } from 'routing-controllers';
import * as express from 'express';
import * as chalk from 'chalk';

export class App {

    private app: express.Application;

    constructor() {
        const PORT = (process.env.PORT || 5000);
        this.app = express();
        this.middleware();
        useExpressServer(this.app);
        this.app.listen(PORT);
        console.log(`Listening on port ${chalk.green(PORT)}`);
    }

    private middleware(): void {
        this.app.use(express.static(path.join(path.resolve(''), 'src/client')));
    }

}