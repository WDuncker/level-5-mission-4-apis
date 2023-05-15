import express from "express";
// import env from "dotenv";
// import calcRoutes from "./routes/index";

// env.config();

const server = express();
server.use(express.json());

const PORT = 4000;
server.listen(4000, () => {
  console.log(`server started on port 4000`);
});
