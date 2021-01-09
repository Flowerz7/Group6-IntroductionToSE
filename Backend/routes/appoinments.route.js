const express = require("express");
const Appointment = require("../models/appointments.model");
const router = express.Router();

router.route("/add").post(async (req, res) => {
  const { mentorID, menteeID, status } = req.body;

  const newAppointment = new Appointment({
    mentorID,
    menteeID,
    status,
  });

  try {
    await newAppointment.save();

    res.json(`Appointment added!`);
  } catch {
    res.status(400).json("Error when add a new appointment!");
  }
});

router.route("/").get(async (req, res) => {
  try {
    const appointments = await Appointment.find();

    res.json(appointments);
  } catch {
    res.status(400).json("Error when get all appointments!");
  }
});

router.route("/:id").delete(async (req, res) => {
  const id = req.params.id;
  const result = await Appointment.deleteOne({ _id: id });
  res.json(result);
});

router.route("/:id").put(async (req, res) => {
  const id = req.params.id;
  const appointment = await Appointment.findById(id);

  appointment.mentorID = req.body.mentorID;
  appointment.menteeID = req.body.menteeID;
  appointment.status = req.body.status;

  const result = await appointment.save();
  res.json(result);
});

module.exports = router;
