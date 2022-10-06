export class Input {
    static inputList(req: any) {
        let page: number = req.page
        let offset: number = req.offset
        // if rest api
        if (req.body) {
            page = req.body.page
            offset = req.body.offset
        }

        return [page, offset]
    }

    static inputDetail(req: any) {
        let id: number
        if(req.hasOwnProperty('body')){
            id = req.body.id
        }else{
            id = req.id
        }

        return id
    }

    static inputCreate(req: any){
        let data: any

        if (req.body) {
            data = req.body
        } else {
            data = req
        }

        return data
    }

    static inputUpdate(req: any){
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

    static inputDelete(req: any){
        let id: number

        if(req.hasOwnProperty('params')){
            id = req.params.id
        }else{
            id = req.id
        }

        return id
    }
}
