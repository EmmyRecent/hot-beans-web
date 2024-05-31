import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const date = new Date();
const year = date.getFullYear();

// Serve static files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/home.ejs", { currentYear: year });
});

app.get("/apply/position1", (req, res) => {
  res.render("pages/position1.ejs", { currentYear: year });
});

app.get("/apply/position2", (req, res) => {
  res.render("pages/position2.ejs", { currentYear: year });
});

app.get("/apply/position3", (req, res) => {
  res.render("pages/position3.ejs", { currentYear: year });
});

app.get("/apply/application-form", (req, res) => {
  res.render("pages/form.ejs", { currentYear: year });
});

app.get("/courses", (req, res) => {
  res.render("pages/courses.ejs", { currentYear: year });
});

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});

// Export the app for Vercel
module.exports = app;
