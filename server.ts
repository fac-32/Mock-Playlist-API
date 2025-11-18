// setup server 
import express from "express";

const app = express();
app.use(express.json());

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})


