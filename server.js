import express from "express";
// import env from "dotenv";
// import calcRoutes from "./routes/index";

// env.config();

const server = express();
server.use(express.json());

server.post("/carValue", (req, res) => {
  const { model, year } = req.body;

  if (!model || !year) {
    return res.status(400).json({ error: "Model and year are required." });
  }

  const modelValue = model
    .toUpperCase()
    .split("")
    .reduce((acc, letter) => acc + (letter.charCodeAt(0) - 64) * 100, 0);

  const carValue = modelValue + parseInt(year);

  res.json({ carValue });
});

const PORT = 4000;
server.listen(4000, () => {
  console.log(`server started on port 4000`);
});
