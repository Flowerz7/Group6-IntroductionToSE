const express = require("express");
const Profile = require("../models/profiles.model");
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const profiles = await Profile.find();

    console.log(`Profile: ${profiles}`);

    res.json(profiles);
  } catch {
    res.status(400).json("Error when get all profile!");
  }
});

router.route("/:id").get(async (req, res) => {
  const id = req.params.id;

  console.log(`ID: ${id}`);

  try {
    const profile = await Profile.findById(id);
    res.json(profile);
  } catch {
    res.status(400).json("Error when get specified profile!");
  }
});

router.route("/add").post(async (req, res) => {
  const {
    email,
    name,
    gender,
    major,
    overview,
    description,
    imageUrl,
  } = req.body;

  const newProfile = new Profile({
    email,
    name,
    gender,
    major,
    overview,
    description,
    imageUrl,
  });

  try {
    await newProfile.save();

    res.json(`User added!`);
  } catch {
    res.status(400).json("Error when add a new profile!");
  }
});

module.exports = router;
