import * as express from 'express';

let app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hallo');
});

app.listen('8080');