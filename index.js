import express from "express";

const app = express();

const port = process.env.Port || 3000;

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})