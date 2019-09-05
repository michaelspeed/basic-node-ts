import {Response, Request} from 'express';

export default class PageController {
    public HomePage(req: Request, res: Response) {
        res.render('home')
    }
}
