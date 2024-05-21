import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const date = new Date();
const year = date.getFullYear();

// Serve static files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/home.ejs", { currentYear: year });
});

app.get("/position1", (req, res) => {
  res.render("pages/position1.ejs");
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
