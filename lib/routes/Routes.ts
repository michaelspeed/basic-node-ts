import {Application} from 'express';
import DefaultController from '../controller/DefaultController';
import PageController from '../controller/PageController';

export class Routes {

    public defaultController: DefaultController = new DefaultController();
    public pageController: PageController = new PageController()

    public routes(app: Application): void {
        app.route('/hello').get(this.defaultController.HelloWorldGet);
        app.route('/get/:id').get(this.defaultController.GetValue);
        app.route('/post').post(this.defaultController.PostVales)
        app.route('/').get(this.pageController.HomePage)
    }
}
