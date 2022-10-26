export class Input {
    /**
     * List
     * Return page and offset
     *
     * @param req
     */
    static list(req: any) {
        let page: number = req.page
        let offset: number = req.offset

        // if rest api
        if (req.body) {
            page = req.body.page
            offset = req.body.offset
        }

        return [page, offset]
    }

    /**
     * View detail
     * Return id of object
     *
     * @param req
     */
    static detail(req: any) {
        let id: number

        if (req.hasOwnProperty('body')) {
            id = req.body.id
        } else {
            id = req.id
        }

        return id
    }

    /**
     * Create
     * Return data from request
     * @param req
     */
    static create(req: any) {
        let data: any

        if (req.body) {
            data = req.body
        } else {
            data = req
        }

        return data
    }

    /**
     * Update
     * Return data and id of object
     * @param req
     */
    static update(req: any) {
        let id: number
        let data: any

        if (req.hasOwnProperty('body')) {
            id = req.body.id
            data = req.body
        } else {
            id = req.id
            data = req
        }

        return [data, id]
    }

    /**
     * Delete
     * Return id of object
     * @param req
     */
    static delete(req: any) {
        let id: number

        if (req.hasOwnProperty('body')) {
            id = req.body.id
        } else {
            id = req.id
        }

        return id
    }
}
