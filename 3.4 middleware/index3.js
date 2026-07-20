import express from "express";


function szpieg(req,res,next
){
console.log("Requsted method: ", req.method);
next();
};


const app= express();
const port = 3000;

app.use(szpieg);

app.get("/", (req, res)=>{
    res.send("hello");
})
app.listen(port,()=>{
console.log(`live on ${port}`);
})

