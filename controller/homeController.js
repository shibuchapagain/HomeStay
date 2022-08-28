const homestay = require("./../mongoose");

const getAllData = async (req, res) => {
  let data = await homestay.find({ _id: "63074988fa0af487478dc2e5" });
  // console.log(data);
  let info = [
    {
      name: "shiva chapagain",
      address: "KTM",
    },
  ];
  info = info[0];
  res.render("index", { info });
};

module.exports = { getAllData };
