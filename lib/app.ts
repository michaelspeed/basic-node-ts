import * as express from 'express'
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import {Routes} from './routes/Routes';

class App {
    public app: express.Application
    public routes: Routes = new Routes()

    constructor() {
        this.app = express()
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use(cors())
        this.routes.routes(this.app)

    }
}

export default new App().app
