const express = require("express");
const { join } = require("path");
const app = express();
app.set("view engine", "ejs");
app.use(express.static(join(__dirname, "public")));
app.use(express.static(__dirname + "/public"));
app.use(express.static("public"));

// const router = require("./routes/homeRoutes");
const router = require("./routes/routes");

app.use(express.json());
app.use("/", router);

app.listen(8000, () => {
  console.log("SERVER AT 8000");
});
