const express = require("express");
const router = express.Router();
const day = require("../models/day");
const students = require("../models/students");

router.get('/', async (req, res) => {
  try {
    const dayData = await day.find();
    res.json(dayData)
  } catch (err) {
    res.json({ massage: err })
  }
})
router.get('/:year/:month/:day', async (req, res) => {
  try {
    const dayData = await day.find({ date: `${req.params.year}/${req.params.month}/${req.params.day}` });
    res.json(dayData)
  } catch (err) {
    res.json({ massage: err })
  }
})
router.delete('/', async (req, res) => {
  try {
    const removed = await day.deleteOne({ date: req.body.date });
    res.json({ message: "OK" });
  } catch (err) {
    res.send({ massage: err });
  }
})
router.patch('/:year/:month/:day', async (req, res) => {
  try {
    await day.findOneAndUpdate({ date: `${req.params.year}/${req.params.month}/${req.params.day}` }, req.body);
    res.json({ message: "OK" })
  } catch (err) {
    console.log(err);
    res.json({ message: err })
  }
});
router.post('/', async (req, res) => {
  try {
    await day.create({ students: req.body.students, date: req.body.date })
    res.json({ message: "OK" })
  } catch (err) {
    console.log(err);
    res.json({ message: err })
  }
});

router.get('/students', async (req, res) => {
  try {
    const studentsData = await students.find();
    res.json(studentsData);
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router;