"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Output = void 0;
class Output {
    static response(req, data, res) {
        // check data is action delete
        if (typeof data == 'number') {
            if (data === 1) {
                data = 'Delete success';
            }
            else {
                data = 'Delete failed';
            }
        }
        if (req.body || req.params || req.query) {
            res.status(200).json({ data: data });
        }
        else {
            return data;
        }
    }
}
exports.Output = Output;
