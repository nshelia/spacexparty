const express = require("express");
const os = require("os");
const app = express();
const compression = require('compression')

app.use(compression())
app.use(express.static("build"));

app.disable('x-powered-by');

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));