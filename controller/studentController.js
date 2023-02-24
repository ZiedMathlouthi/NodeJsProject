const student = require("../modele/student");

exports.getAllStudents = async (req, res) => {
  try {
    const data = await student.find({});
    res.send(data);
  } catch (err) {
    res.status(400).send({ error: error.toString() });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const data = await student.findById(req.params.id);
    res.send(data);
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

exports.addNewStudent = async (req, res) => {
  try {
    const Student = new student(req.body);
    console.log("resultat :" + JSON.stringify(req.body));
    console.log("resultat :" + JSON.stringify(Student));

    await Student.save();
    res.status(200).send("add Success");
  } catch (err) {
    res.status(400).send({ error: error.toString() });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await student.findByIdAndRemove(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.send(err);
  }
};

exports.updateStudent = async (req, res) => {
  try {
    await student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send("updated");
  } catch (err) {
    res.send(err);
  }
};
