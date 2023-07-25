"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Item_controller_1 = __importDefault(require("../controller/Item.controller"));
const Itemrouter = express_1.default.Router();
Itemrouter.get("/listShoe", (req, res) => {
    Item_controller_1.default.listItem(req, res);
});
Itemrouter.post('/addShoe', (req, res) => {
    Item_controller_1.default.addItem(req, res);
});
exports.default = Itemrouter;
//# sourceMappingURL=Item.api.router.js.map