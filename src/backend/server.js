const express = require("express");
const os = require("os");
const app = express();

app.use(express.static("build"));

app.disable('x-powered-by');

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen(process.env.PORT || 8080, () => console.log("Listening on port 8080!"));