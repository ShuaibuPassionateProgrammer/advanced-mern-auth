import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.listen(8080, () => console.log(`Server is up running on port 8080`));