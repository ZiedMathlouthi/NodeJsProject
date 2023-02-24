const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");
const student = require("../modele/student");

router.get("/getAll", studentController.getAllStudents);

router.get("/getStudent/:id", studentController.getStudentById);

router.post("/new", studentController.addNewStudent);

router.put("/update/:id", studentController.updateStudent);

router.delete("/delete/:id", studentController.deleteStudent);

module.exports = router;
