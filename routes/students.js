const express = require("express");
const router = express.Router();
const Lesson = require("../models/lesson")


router.get('/', async (req, res) => {
  try {
    const lessons = await Lesson.find();
    res.json(lessons)
  } catch (err) {
    res.json({ massage: err })
  }
})

router.post('/', async (req, res) => {
  const lesson = new Lesson({
    students: req.body.students,
    lessonName: req.body.lessonName,
  })
  try {
    const savedLesson = await lesson.save();
    res.json(savedLesson);
  } catch (err) {
    res.json({ massage: err });
  }
});

router.delete('/', async (req, res) => {
  try {
    const removed = await Lesson.deleteOne({ _id: req.params.id });
    res.json(removed);
  } catch (err) {
    res.send({ massage: err });
  }
})

router.patch('/', async (req, res) => {
  try {
    const updatedLesson = await Lesson.updateOne({ _id: req.body.id },
      { $set: { students: req.body.students } })
    res.json(updatedLesson);
  } catch (err) {
    console.log(err);
    res.json({ massage: err })
  }
});

module.exports = router;