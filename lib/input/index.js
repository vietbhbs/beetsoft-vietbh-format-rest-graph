"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
class Input {
    static inputList(req) {
        let page = req.page;
        let offset = req.offset;
        // if rest api
        if (req.body) {
            page = req.body.page;
            offset = req.body.offset;
        }
        return [page, offset];
    }
    static inputDetail(req) {
        let id;
        if (req.hasOwnProperty('body')) {
            id = req.body.id;
        }
        else {
            id = req.id;
        }
        return id;
    }
    static inputCreate(req) {
        let data;
        if (req.body) {
            data = req.body;
        }
        else {
            data = req;
        }
        return data;
    }
    static inputUpdate(req) {
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
    static inputDelete(req) {
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
