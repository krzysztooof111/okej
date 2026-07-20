import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {res.render("index.ejs")});

app.post("/submit", (req, res) => {
  req.body["fName"];
  req.body["lName"];
  let slowo= req.body["fName"] + req.body["lName"];
  console.log(slowo.length)
  res.render("index.ejs", {slowo,slowo})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
