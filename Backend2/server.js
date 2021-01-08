const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const profileRouter = require("./routes/profiles.route");
const requirementRouter = require("./routes/requirements.route");
const appointmentRouter = require("./routes/appoinments.route");
const mailRouter = require("./routes/mails.route");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/profiles", profileRouter);
app.use("/requirements", requirementRouter);
app.use("/appointments", appointmentRouter);
app.use("/mails", mailRouter);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log(`MongoDB database connection established successfully`);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
