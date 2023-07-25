"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const DatabaseConnet_1 = require("./src/models/DatabaseConnet");
const api_router_1 = __importDefault(require("./src/Routers/api.router"));
const cors_1 = __importDefault(require("cors"));
const PORT = 3080;
const app = (0, express_1.default)();
DatabaseConnet_1.DataBase.connectDB()
    .then(() => console.log('DB Connected!'))
    .catch((err) => console.log(err.message));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true, credential: true }));
app.use('/api', api_router_1.default);
app.listen(PORT, 'localhost', () => console.log(`App is running at http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map