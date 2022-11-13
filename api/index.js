import express from "express";

const app = express();

const port = 8800;

app.use(express.json());

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
