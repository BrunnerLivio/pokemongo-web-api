import { log } from 'util';
import * as path from 'path';
import 'reflect-metadata';

import './controllers/PokemonController';
import './controllers/MoveController';
import './controllers/DocumentationController';

import { useExpressServer } from 'routing-controllers';
import * as express from 'express';
import * as chalk from 'chalk';
import * as exphbs from 'express-handlebars';

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
        this.app.set('views', path.join(process.cwd(), '/src/client'));
        this.app.set('view engine', 'handlebars');
        this.app.engine('handlebars', exphbs({
            layoutsDir: 'src/client/layout',
            defaultLayout: 'default'
        }));
        this.app.use('/build', express.static(path.join(process.cwd(), 'src/client/build')));
    }
}