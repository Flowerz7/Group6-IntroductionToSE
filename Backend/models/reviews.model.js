const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    mentorID: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    menteeID: {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
