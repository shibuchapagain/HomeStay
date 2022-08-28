const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/homestay")
  .then(() => console.log("DATABASE CONNECT"))
  .catch((err) => console.log("couldnot connect database", err));

const data = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("homestay", data);
