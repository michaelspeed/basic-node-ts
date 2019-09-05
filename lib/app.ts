import * as express from 'express'
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import {Routes} from './routes/Routes';
import * as path from 'path';

class App {
    public app: express.Application;
    public routes: Routes = new Routes();

    constructor() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "hbs");
        this.app.use('/static',express.static(path.join(__dirname, "static")));
        this.routes.routes(this.app)

    }
}

export default new App().app
