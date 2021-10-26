const express = require("express");
const fs = require("fs");
const cors = require("cors")

const fileUpload = require("express-fileupload");
const app = express();
const PORT = 7070;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  fileUpload({
    limits: {
      fileSize: 5 * 1024 * 1024, //2MB max file(s) size
    },
  })
);

app.get("/", (req, res) => {
 res.json("welcome to the polygon area calculator API")
});

const annotations = require("./routes/upload");
// create our router
const router = express.Router();

// REGISTER OUR ROUTES -------------------------------
app.use("/", router);
// Use Routes
app.use("/", annotations);

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////start error handling middleware/////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  const errors = {};

  errors.message = error.message;
  res.json({ errors });
});
//////////////end error handling middleware////////////////////////

app.listen(PORT, () =>
  console.log(`Polygon calculator server is running on port ${PORT}!`)
);

module.exports = app;
