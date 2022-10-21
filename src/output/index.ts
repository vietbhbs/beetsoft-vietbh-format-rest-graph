import {Response} from "express";

export class Output {
    /**
     * Response rest api or graphql
     *
     * @param req
     * @param data
     * @param res
     */
    static response(req: any, data: any, res: Response) {
        // check data is action delete
        if (typeof data == 'number') {
            if (data === 1){
                data = 'Delete success'
            }else{
                data = 'Delete failed'
            }
        }

        if (req.body || req.params || req.query) {
            res.status(200).json({data: data})
        } else {
            return data
        }
    }
}
