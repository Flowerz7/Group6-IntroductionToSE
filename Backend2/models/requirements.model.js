const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const requirementSchema = new Schema(
  {
    mentorID: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    menteeID: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    message: {
      type: String,
      require: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["appointment", "workshop", "friend"],
    },
  },
  {
    timestamps: true,
  }
);

const Requirement = mongoose.model("Requirement", requirementSchema);

module.exports = Requirement;
