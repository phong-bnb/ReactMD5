declare class ProductController {
    static getAll(req: any, res: any): Promise<void>;
    static addItem(req: any, res: any): Promise<void>;
    static updateUpdate(req: any, res: any): Promise<void>;
    static deleteOne(req: any, res: any): Promise<void>;
}
export default ProductController;
