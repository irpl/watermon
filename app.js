const express = require("express");
const log4js = require("log4js");
require("dotenv").config();

// * FILE LOGGER
log4js.configure({
  appenders: {
    sensor: {
      type: "dateFile",
      layout: {
        type: "pattern",
        pattern: "%d %p %c %m"
      },
      filename: "logs/sensor_data.log",
      keepFileExt: "true"
    }
  },
  categories: {
    default: { appenders: ["sensor"], level: "info" }
  }
});
const logger = log4js.getLogger("sensor");
// * /FILE LOGGER

// * DATA LISTENER
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WaterMon API");
});

app.post("/data", (req, res) => {
  logger.info(req.body.data);
  res.json({ data: {}, message: "success" });
});

const PORT = process.env.WATERMON_LISTENER_PORT || 3020;
app.listen(PORT, () => {
  console.log(`WaterMon is running on port ${PORT}`);
});
// * /DATA LISTENER
