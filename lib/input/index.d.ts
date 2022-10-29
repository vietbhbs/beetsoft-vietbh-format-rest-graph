export declare class Input {
    /**
     * List
     * Return page and offset
     *
     * @param req
     */
    static list(req: any): number[];
    /**
     * View detail
     * Return id of object
     *
     * @param req
     */
    static detail(req: any): string | number;
    /**
     * Create
     * Return data from request
     * @param req
     */
    static create(req: any): any;
    /**
     * Update
     * Return data and id of object
     * @param req
     */
    static update(req: any): any[];
    /**
     * Delete
     * Return id of object
     * @param req
     */
    static delete(req: any): string | number;
}
