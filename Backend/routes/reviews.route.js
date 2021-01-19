const express = require("express");
const Review = require("../models/reviews.model");
const router = express.Router();

router.route("/add").post(async (req, res) => {
  const { mentorID, menteeID, rating, comment } = req.body;

  const newReview = new Review({
    mentorID,
    menteeID,
    rating,
    comment,
  });

  try {
    await newReview.save();

    res.json(`Review added!`);
  } catch {
    res.status(400).json("Error when add a new review!");
  }
});

router.route("/").get(async (req, res) => {
  try {
    const reviews = await Review.find();

    res.json(reviews);
  } catch {
    res.status(400).json("Error when get all reviews!");
  }
});

module.exports = router;
