"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class DataBase {
    static async connectDB() {
        const DB_URl = 'mongodb+srv://ngphong0708:5k3Ryjs04f9vJMPn@cluster0.px6ohyz.mongodb.net/test';
        return await mongoose_1.default.connect(DB_URl);
    }
}
exports.DataBase = DataBase;
//# sourceMappingURL=DatabaseConnet.js.map