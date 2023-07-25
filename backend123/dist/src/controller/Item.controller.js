"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Item_schema_1 = __importDefault(require("../models/schemas/Item.schema"));
class Itemcontroller {
    static async listItem(req, res) {
        try {
            let listItem = await Item_schema_1.default.find();
            if (listItem) {
                res.status(200).json(listItem);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    static async addItem(req, res) {
        const { name, image, description } = req.body;
        let addItem = await Item_schema_1.default.findOne({ name: name });
        if (!addItem) {
            let newAddItem = new Item_schema_1.default({
                name: name,
                image: image,
                description: description
            });
            await newAddItem.save();
            res.status(200).json({
                message: 'add thanh cong'
            });
        }
        else {
            res.status(500).json({
                message: "ngu ngu "
            });
        }
    }
}
exports.default = Itemcontroller;
//# sourceMappingURL=Item.controller.js.map