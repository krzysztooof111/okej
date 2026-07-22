import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "kozak";
const yourPassword = "pajac@@@";
const yourAPIKey = "47e57fdf-7483-43ff-88de-404ffd2700a1";
const yourBearerToken = "f25eb70e-6531-44b6-ae12-9725575e513f";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/random");
    console.log(response);
    res.render("index.ejs", { content: JSON.stringify(response.data) })
  } catch (error) {
    res.status(404).send(error.message);
  }

});

app.get("/basicAuth", async (req, res) => {
  try {
 const response=  await axios.get(API_URL + "/all", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      }
    });
    console.log(response.data)
    res.render("index.ejs", { content: JSON.stringify(response.data) })
  }
  catch (error) {
    res.status(404).send(error.message);
  }
  });

app.get("/apiKey", async (req, res) => {

  try{
    const response=await axios.get(API_URL+"/filter?score=5&apiKey="+yourAPIKey)
    console.log(response)
    res.render("index.ejs", { content: JSON.stringify(response.data) })
  }
  catch(error){
    res.status(404).send(error.message);
  }
});
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};
app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
   try {
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
