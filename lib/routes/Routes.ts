import {Application} from 'express';
import DefaultController from '../controller/DefaultController';

export class Routes {

    public defaultController: DefaultController = new DefaultController();

    public routes(app: Application): void {
        app.route('/hello').get(this.defaultController.HelloWorldGet)
        app.route('/get/:id').get(this.defaultController.GetValue)
    }
}
