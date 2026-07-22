import axios from "axios"
import express from "express"
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const port = 6767;
app.listen(port, () => {
    console.log(`Hello from ${port}`)
})
const link = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid="
const ApiKey = "6f2b37e847be09c6ca0d2ab3cab1933e"

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/search", async (req, res) => {
    const znak = req.body.symbol;
    if(!znak){
        res.render("index.ejs", {
            kom: "Nie znaleziono miasta"
        })
    }
    else{

    const dane = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${znak}&appid=${ApiKey}`);
    console.log(dane)
      if (!dane.data || dane.data.length === 0 || znak.length===0) {
        res.render("index.ejs", {
            kom: "Nie znaleziono miasta"
        });
    } else{
    const lon = dane.data[0].lon;
    const lat = dane.data[0].lat;
    const name = dane.data[0].local_names?.pl || dane.data[0].name || "Nieznane miasto";

  
   

    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${ApiKey}`)
    res.render("index.ejs", {
        name: name,
        content: JSON.stringify(result.data)
    });
}

}
});

