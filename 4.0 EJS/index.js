import express from 'express'
import bodyPaser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app= express();
const port=3000;

const __dirname= dirname(fileURLToPath(import.meta.url));
app.use(bodyPaser.urlencoded({extended: true}));

const day=new Date();
const prawda=  day.getDay();
let komuinikat ="";
if(prawda > 0 && prawda <6){
komuinikat="It's a weekday, it's time to work hard"
}
else{
    komuinikat="It's a weekend, it's time to have fun"
}
console.log(komuinikat)
app.get("/",(req, res)=>{
    res.render("view.ejs",{komunikat: komuinikat})
})
app.listen(port,()=>{
    console.log(`powino działać ${port}`)
})