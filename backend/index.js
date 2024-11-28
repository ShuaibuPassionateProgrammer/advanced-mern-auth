import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(8080, () => console.log(`Server is up running on port 8080`));