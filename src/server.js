const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();

var corsOptions = {
  origin: "http;//localhost:8000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

db.sequelize.sync();

app.get("/", (req,res) => {
  res.json({message: "Welcome"});
});

require("./routes/routes_user")(app);
require("./routes/routes_application")(app);
require("./routes/routes_key")(app);
require("./routes/routes_login_key")(app);
require("./routes/routes_login_user")(app);

app.listen(8000);