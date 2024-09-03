const express = require("express");
const dataformrouter = express.Router();

dataformrouter.get("/dataform1", (req, res) => {
  res.render("dataform1", { dataform: true });
});

dataformrouter.post("/home1", (req, res) => {
  const { name, age, gender, address, marks, major } = req.body;
  console.log(name, age, gender, address, marks, major);
  res.send("success");
});

dataformrouter.post("/counselling", (req, res) => {

  const {
    physicsMarks,
    chemistryMarks,
    mathsMarks,
    marks,
    preferredCourse,
    generalRank,
    community
  } = req.body;

  const physicsMarksNum = parseInt(physicsMarks, 10);
  const chemistryMarksNum = parseInt(chemistryMarks, 10);
  const mathsMarksNum = parseInt(mathsMarks, 10);

  if (isNaN(physicsMarksNum) || isNaN(chemistryMarksNum) || isNaN(mathsMarksNum)) {
    console.error("Invalid input: Please provide valid numeric marks.");
    return res.status(400).send("Invalid input: Please provide valid numeric marks.");
  }

  const phychem = (chemistryMarksNum + physicsMarksNum) / 2;
  const total = phychem + mathsMarksNum;

  console.log("Physics Marks:", physicsMarksNum);
  console.log("Chemistry Marks:", chemistryMarksNum);
  console.log("Maths Marks:", mathsMarksNum);
  console.log("Total of phychem and maths:", total);

  const cutoff1 = (physicsMarksNum + chemistryMarksNum)/2;
  const maincutoff=cutoff1+mathsMarksNum
  console.log("Cutoff Marks:", maincutoff);

  res.render("counselling", { counselling: true,maincutoff,generalRank,community});
});

module.exports = dataformrouter;
