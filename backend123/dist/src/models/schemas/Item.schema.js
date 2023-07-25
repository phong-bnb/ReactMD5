"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const itemSchema = new mongoose_1.Schema({
    name: String,
    image: String,
    description: String
});
const Item = (0, mongoose_1.model)("Item", itemSchema);
exports.default = Item;
//# sourceMappingURL=Item.schema.js.map