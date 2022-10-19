"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
class Input {
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
    static update(req) {
        let id;
        let data;
        if (req.hasOwnProperty('params')) {
            id = req.params.id;
            data = req.body;
        }
        else {
            id = req.id;
            data = req;
        }
        return [data, id];
    }
    static delete(req) {
        let id;
        if (req.hasOwnProperty('params')) {
            id = req.params.id;
        }
        else {
            id = req.id;
        }
        return id;
    }
}
exports.Input = Input;
