const express = require("express");
const Requirement = require("../models/requirements.model");
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const requirements = await Requirement.find();

    res.json(requirements);
  } catch {
    res.status(400).json("Error when get all requirements!");
  }
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;

  try {
    const requirement = Requirement.findOne({ mentorID: id });
    res.json(requirement);
  } catch {
    res.status(400).json("Error when get specified requirement!");
  }
});

router.route("/add").post(async (req, res) => {
  const { mentorID, menteeID, type, message } = req.body;

  const newRequirement = new Requirement({
    mentorID,
    menteeID,
    message,
    type,
  });

  try {
    await newRequirement.save();
    res.json(`Requirement added!`);
  } catch {
    res.status(400).json("Error when add a new requirement!");
  }
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const result = await Requirement.deleteOne({ _id: id });
  res.json(result);
});

module.exports = router;
