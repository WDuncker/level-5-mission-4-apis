"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use('/', index_1.default);
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`******Server started on port 4000**********`);
});
