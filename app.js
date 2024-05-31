import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;
const date = new Date();
const year = date.getFullYear();

// For ES Modules, you need to handle __dirname differently
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Set the views directory and view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// console.log("Views directory:", path.join(__dirname, "views"));

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
export default app;
