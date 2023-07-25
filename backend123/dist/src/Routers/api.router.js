"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = __importDefault(require("../controller/product.controller"));
const router = express_1.default.Router();
router.get('/products', (req, res) => {
    product_controller_1.default.getAll(req, res);
});
router.post('/products/store', (req, res) => {
    product_controller_1.default.addItem(req, res);
});
router.post('/updateProduct/:id', (req, res) => {
    product_controller_1.default.updateUpdate(req, res);
});
router.delete('/product/:id', (req, res) => {
    product_controller_1.default.deleteOne(req, res);
});
exports.default = router;
//# sourceMappingURL=api.router.js.map