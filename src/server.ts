import express from "express";
import env from "dotenv";
import calcRoutes from "./routes/index";

//Allows use of .env variable
env.config();

const server = express();
server.use(express.json());

//Opens main endpoint to be accessed from index file
server.use("/api", calcRoutes);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
