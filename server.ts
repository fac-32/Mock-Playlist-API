// setup server 
import express from "express";
import { router } from "./index";

const app = express();
app.use(express.json());

const PORT = 8000;

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})


