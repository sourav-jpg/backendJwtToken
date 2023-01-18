const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();
const connectDb = require("../backend/server/database/connection");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

//db connection
connectDb();

//cors
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
app.all("/*", (request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "*");
  response.header("Access-Control-Expose-Headers", "*");
  response.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS, HEAD, PATCH"
  );
  response.header("Access-Control-Allow-Credentials", true);
  next();
});

//parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("../backend/server/routes/router"));

//error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: true, message: err.message });
});


app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
