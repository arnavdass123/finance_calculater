require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const User = require("../database/userSchema");
const ejs = require("ejs");
const mongoose = require("mongoose");
const userSchema = require("../database/userSchema");

const PORT = process.env.PORT || 80;

// database connection:
const url = "mongodb://localhost/finance_calculater";
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

// information about connection:
const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("database connected...");
  })
  .catch((err) => {
    console.log("connection failed");
  });

// specify datatype:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// defining path:
app.set("/views", path.join(__dirname, "veiws")); // connect with file
app.use(express.static("static"));
// set engine:

app.set("view engine", "ejs");
// express specific stuff:

app.get("/", async (req, res) => {
  const data = await User.find();
  console.log(data);
  // let = my_data;
  // for (i = 0; i <= data.length; i++) {
  //   let = data;
  //   if (data === null) {
  //     data = data.income;
  //   } else {
  //    data = data + data.income;
  //   }
  // }

  return res.render("index", { Data: data });
});

app.post("/", (req, res) => {
  const { name, income, expences, assets, liabilites } = req.body;

  const user = new User({
    name: name,
    income: income,
    expences: expences,
    assets: assets,
    liabilites: liabilites,
  });

  user
    .save()
    .then((user) => {
      return res.redirect("/");
    })
    .then((err) => {
      console.log("something went worng", err);
    });
});

app.listen(PORT, (req, res) => {
  console.log("port is running on " + PORT);
});
