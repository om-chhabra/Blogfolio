const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const secret = process.env.SECRET;

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "/tmp")); // Use absolute path
  },
  filename: function (req, file, cb) {
    // Consider any necessary adjustments to filename generation
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const uploadMiddleware = multer({ storage: storage });

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((e) => {
    console.log("Connection Failed ", e);
  });

app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(cookieParser());
app.use("/tmp", express.static(path.join(__dirname, "/tmp")));

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.create({
    username,
    password: bcrypt.hashSync(password, salt),
  });
  res.json(userDoc);
});

app.get("/", (req, res) => {
  res.json("Blogs API!");
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token, { secure: true, sameSite: "None" }).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("Wrong Credentials.");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token === undefined || "") {
    res.json(null);
  } else {
    jwt.verify(token, secret, {}, (err, info) => {
      if (err) throw err;
      res.json(info);
    });
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  let coverPath = "/tmp/placeholder.jpg";
  if (req.file) {
    coverPath = req.file.path; // Use the path provided by multer
  }
  const { title, summary, content } = req.body;
  await Post.create({
    title,
    summary,
    content,
    cover: coverPath,
  });
  res.json("ok");
});

app.get("/post", async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const postDoc = await Post.findById(id);
    res.json(postDoc);
  } catch {
    res.json("error");
  }
});

app.delete("/remove/:id", async (req, res) => {
  const { id } = req.params;
  const response = await Post.deleteOne({ _id: id });
  res.json(response);
});

app.put("/post/:id", uploadMiddleware.single("file"), async (req, res) => {
  const { id } = req.params;
  const { title, summary, content } = req.body;
  if (req.file === undefined) {
    const response = await Post.updateOne(
      { _id: id },
      {
        title,
        summary,
        content,
      }
    );
  } else {
    const { originalname, path } = req.file;
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);
    const response = await Post.updateOne(
      { _id: id },
      {
        title,
        summary,
        content,
        cover: newPath,
      }
    );
  }
  res.json("ok");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Listening on port: " + port);
});
