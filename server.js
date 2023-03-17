const express = require("express");

const app = express();
//const routesIndex = require("./routes/index");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

//reference https://stackoverflow.com/questions/52275223/why-is-require-routesapp-not-equivalent-to-having-the-same-code-in-one-ap
//i officially hate syntax
require("./routes/api")(app);
require("./routes/server")(app);

app.listen(PORT, function () {
  console.log(`Server is listening on PORT: ${PORT}`);
});
