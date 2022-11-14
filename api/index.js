import express from "express";
import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();

const port = 8800;

app.use(express.json());
app.use(cookieParser());

// muilter
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
