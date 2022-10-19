export class Input {
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

    static detail(req: any) {
        let id: number
        if(req.hasOwnProperty('body')){
            id = req.body.id
        }else{
            id = req.id
        }

        return id
    }

    static create(req: any){
        let data: any

        if (req.body) {
            data = req.body
        } else {
            data = req
        }

        return data
    }

    static update(req: any){
        let id: number
        let data: any

        if(req.hasOwnProperty('params')){
            id = req.params.id
            data = req.body
        }else{
            id = req.id
            data = req
        }

        return [data, id]
    }

    static delete(req: any){
        let id: number

        if(req.hasOwnProperty('params')){
            id = req.params.id
        }else{
            id = req.id
        }

        return id
    }
}
