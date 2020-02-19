const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// const PORT = 3000;
const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongodb://<dbuser>:<dbpassword>@ds035816.mlab.com:35816/heroku_qkl7nwz7

mongoose.connect("mongodb://user1:tracker1@ds035816.mlab.com:35816/heroku_qkl7nwz7", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// mongoose.connect("mongodb://user1:tracker1@ds263928.mlab.com:63928/heroku_qlj7pl2x", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});