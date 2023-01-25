import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import connectDB from "../server/mongodb/connectDB.js";
import postRoutes from "../server/routes/postRoutes.js";
import dalleRoutes from "../server/routes/dalleRoutes.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

connectDB();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
