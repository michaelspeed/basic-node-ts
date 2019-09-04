import {Response, Request} from 'express';

export default class DefaultController {
    public HelloWorldGet(req: Request, res: Response) {
        return res.status(200).json({
            message: 'Hello WWorld'
        })
    }

    public GetValue(req: Request, res: Response) {
        const value = req.params.id
        if (value === '1122') {
            return res.status(200).json({message: 'All OK'})
        } else {
            return res.status(404).json({message: 'Error'})
        }
    }
}
