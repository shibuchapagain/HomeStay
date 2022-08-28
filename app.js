const express = require("express");
const { join } = require("path");
const app = express();
app.use(express.static(join(__dirname, "public")));
app.use(express.static("public"));

const router = require("./routes/homeRoutes");
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "views");
app.use("/", router);

app.listen(8000, () => {
  console.log("SERVER AT 8000");
});
