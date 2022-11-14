import express from "express";
import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
const app = express();

const port = 8800;

app.use(express.json());
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
