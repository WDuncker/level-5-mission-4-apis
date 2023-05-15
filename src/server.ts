import express from "express";
import env from "dotenv";
import calcRoutes from "./routes/index";

env.config();

const server = express();
server.use(express.json());

server.use("/api", calcRoutes);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
