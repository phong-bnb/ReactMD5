"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: String,
    image: String,
    description: String,
    isNewProduct: Boolean,
}, { timestamps: true });
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
//# sourceMappingURL=product.schema.js.map