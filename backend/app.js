const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRouter = require("./src/routes/auth");
const bidRouter = require("./src/routes/bid");
const bidItemRouter = require("./src/routes/bid-item");

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/bid", bidRouter);
app.use("/api/item", bidItemRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  const errorMsg = {
    status: error.status,
    message: error.message,
    ...(process.env.NODE_ENV === "dev" && { stack: error.stack }),
  };

  res.json(errorMsg);
});

module.exports = app;
