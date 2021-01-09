const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointmentSchema = new Schema(
  {
    mentorID: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    menteeID: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    status: {
      type: String,
      required: true,
      enum: ["process", "done", "reviewed"],
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
