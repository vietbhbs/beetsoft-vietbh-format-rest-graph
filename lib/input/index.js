"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
class Input {
    /**
     * List
     * Return page and offset
     *
     * @param req
     */
    static list(req) {
        let page = req.page;
        let offset = req.offset;
        // if rest api
        if (req.body) {
            page = req.body.page;
            offset = req.body.offset;
        }
        return [page, offset];
    }
    /**
     * View detail
     * Return id of object
     *
     * @param req
     */
    static detail(req) {
        let id;
        if (req.hasOwnProperty('body')) {
            id = req.body.id;
        }
        else {
            id = req.id;
        }
        return id;
    }
    /**
     * Create
     * Return data from request
     * @param req
     */
    static create(req) {
        let data;
        if (req.body) {
            data = req.body;
        }
        else {
            data = req;
        }
        return data;
    }
    /**
     * Update
     * Return data and id of object
     * @param req
     */
    static update(req) {
        let id;
        let data;
        if (req.hasOwnProperty('body')) {
            id = req.body.id;
            data = req.body;
        }
        else {
            id = req.id;
            data = req;
        }
        return [data, id];
    }
    /**
     * Delete
     * Return id of object
     * @param req
     */
    static delete(req) {
        let id;
        if (req.hasOwnProperty('body')) {
            id = req.body.id;
        }
        else {
            id = req.id;
        }
        return id;
    }
}
exports.Input = Input;
