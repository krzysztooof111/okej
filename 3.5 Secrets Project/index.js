//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express"
import bodyPaser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app= express();
const port=3000;

const __dirname= dirname(fileURLToPath(import.meta.url));
app.use(bodyPaser.urlencoded({extended: true}));

app.get("/",((req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
}))

const maslo="ILoveProgramming";

app.post("/check",(req,res)=>{
    console.log(req.body.password);
    if(req.body.password===maslo){
    res.sendFile(__dirname + "/public/secret.html");}
});
app.listen(port,()=>{
    console.log(`Port na ${port}`)
})