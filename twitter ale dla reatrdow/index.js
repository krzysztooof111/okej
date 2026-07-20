import express from "express"
import bodyParser from "body-parser"
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("It is running")
})
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index.ejs",{tweety: tweety,czas:czas});
})

let tweety = [];
let czas=[];

app.use(express.static("public"));


app.post("/submit", (req, res) => {
    let data = new Date() 
    let rok = data.getFullYear();
    let miesiac = data.getMonth() +1;
    let dzien = data.getDate();
    let godzina = data.getHours();
    let minuta = data.getMinutes();
    minuta= String(minuta).padStart(2,"0")
    godzina = String(godzina).padStart(2,"0")
    let times ={
        rok:rok,
        miesiac:miesiac,
        dzien:dzien,
        godzina:godzina,
        minuta:minuta
    }
    czas.push(times)
    tweety.push(req.body.tweet);
    console.log(tweety)
    res.render("index.ejs", { tweety: tweety,czas:czas })
})

app.post("/delete/:id", (req, res) => {
  const i = Number(req.params.id);

  tweety.splice(i, 1);
  czas.splice(i, 1);

  res.render("index.ejs", { tweety: tweety, czas: czas });
});

app.post("/edit-mode/:id", (req, res) => {
  const i = Number(req.params.id);

  res.render("index.ejs", {
    tweety: tweety,
    czas: czas,
    editId: i
  });
});


app.post("/edit/:id", (req, res) => {
  const i = Number(req.params.id);

  tweety[i] = req.body.tweet;

  res.render("index.ejs", {
    tweety: tweety,
    czas: czas
  });
});