import express from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/post.js";

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts) {
      res.status(200).json({ success: true, data: posts });
    } else {
      res.status(401).json({ error: true, response: "something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Create a post
router.post("/", async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    console.log("*** DATA ***", name, prompt, photo);
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    console.log(photoUrl);

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
