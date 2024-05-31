import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const date = new Date();
const year = date.getFullYear();

// Serve static files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// Error handling middleware;
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

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

module.exports = app;
