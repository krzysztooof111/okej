import express from "express";
import bodyPaser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url"

const __dirname= dirname(fileURLToPath(import.meta.url));
const app= express();
const port = 3000;


app.use(bodyPaser.urlencoded({extended: true}));


app.get("/",((req, res)=>{
    res.sendFile(__dirname + "/index.html")
}))

app.post("/submit",(req,res)=>{
    console.log(req.body.email);
});



app.listen(port,()=>{
    console.log(`Listen on port ${port}`);
});