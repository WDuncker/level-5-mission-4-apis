import express from "express";
import env from "dotenv";
import calcRoutes from "./routes/index";
import carValue from './routes/index'

//Allows use of .env variable
env.config();

const server = express();
server.use(express.json());

//Opens main endpoint to be accessed from index file
server.use("/api", calcRoutes);
server.use('/', carValue)

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

