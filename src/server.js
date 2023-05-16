import express from "express";
import env from "dotenv";
import axios from "axios";
import routes from "./routes/index.js";

env.config();

const server = express();
server.use(express.json());

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
