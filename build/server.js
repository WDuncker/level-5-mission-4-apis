"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_1 = __importDefault(require("./routes/index"));
//Allows use of .env variable
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(express_1.default.json());
//Opens main endpoint to be accessed from index file
server.use("/api", index_1.default);
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
