import { Response } from "express";
export declare class Output {
    /**
     * Response rest api or graphql
     *
     * @param req
     * @param data
     * @param res
     */
    static response(req: any, data: any, res: Response): any;
}
