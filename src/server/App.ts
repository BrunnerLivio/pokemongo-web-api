import { log } from 'util';
import * as path from 'path';
import 'reflect-metadata';

import './components/Pokemon/PokemonController';
import './components/Move/MoveController';
import './components/Documentation/DocumentationController';

import { useExpressServer } from 'routing-controllers';
import * as express from 'express';
import * as chalk from 'chalk';
import * as exphbs from 'express-handlebars';
import APP_SETTINGS from './AppSettings';

export class App {

    private app: express.Application;
    private PORT: number;
    constructor() {
        this.PORT = parseInt(process.env.PORT) || APP_SETTINGS.server.defaultPort;
        this.app = express();
        this.middleware();
        useExpressServer(this.app);
        this.app.listen(this.PORT);
        console.log(`Listening on port ${chalk.green(this.PORT.toString())}`);
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