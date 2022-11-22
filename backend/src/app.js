const express = require("express");
const errorController = require("./controllers/error-controller");
const HttpError = require("./models/http-error");
const app = express();

app.use(express.json(), express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes"));

app.all("*", (req, res, next) => {
  return next(
    new HttpError(
      `La ruta ${req.originalUrl} no pertenece a este servidor`,
      404
    )
  );
});

app.use(errorController);

module.exports = app;
