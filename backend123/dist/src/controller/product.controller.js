"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_schema_1 = __importDefault(require("../models/schemas/product.schema"));
class ProductController {
    static async getAll(req, res) {
        try {
            console.log(req.query.isNew);
            let products = await product_schema_1.default.find(req.query.all === 'true'
                ? {}
                : {
                    isNewProduct: req.query.isNew === 'true' ? true : { $ne: true },
                }).sort({ createdAt: -1 });
            if (products) {
                res.status(200).json(products);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    static async addItem(req, res) {
        const { name, image, description, isNew } = req.body;
        let addItem = await product_schema_1.default.findOne({ name: name });
        if (!addItem) {
            await product_schema_1.default.create({
                name: name,
                image: image,
                description: description,
                isNewProduct: isNew,
            });
            res.status(200).json({
                message: 'add thanh cong',
            });
        }
        else {
            res.status(500).json({
                message: 'ngu ngu ',
            });
        }
    }
    static async updateUpdate(req, res) {
        const { name, image, description } = req.body;
        let updateItem = await product_schema_1.default.findOne({ _id: req.params.id });
        if (updateItem) {
            (updateItem.name = name),
                (updateItem.image = image),
                (updateItem.description = description);
        }
        await updateItem.save();
        res.json({
            message: 'ngu ngu ',
        });
    }
    static async deleteOne(req, res) {
        await product_schema_1.default.findByIdAndRemove(req.params.id);
        res.json({
            message: 'deleted',
        });
    }
}
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map