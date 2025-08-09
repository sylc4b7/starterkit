// require Model
const Student = require("../models/Student");

exports.getAllStudents = async (req, res, next) => {
    // remember to add try catch for error handling
    try {
        const students = await Student.find();
        res.status(200).json(students)
    } catch (error) {
        console.error("getAllStudents", error)
        res.status(500).json({
            messages: error.messages
        })
    }
}

exports.createStudent = async (req, res, next) => {
    // create student
    const newStudent = {
        name: req.body["name"],
        age: req.body["age"]
    }
    const student = await new Student(newStudent).save()
    res.status(200).json({
        messages: "student created",
        data: student
    })
}

exports.getStudentByid = async (req, res, next) => {
    const stduentId = req.params.id;
    console.log("stduentId", stduentId)
    const student = await Student.findById(stduentId)
    res.status(200).json(student)
}

exports.deleteStudent = async (req, res, next) => {
    const stduentId = req.params.id;
    console.log("stduentId", stduentId)
    if (!stduentId) return res.status(400).send("please input studentId")
    const foundStudent = await Student.findById(stduentId);
    if (!foundStudent) return res.status(400).send("no this student")

    const student = await Student.deleteOne(foundStudent)
    res.status(200).json(student)
}

exports.updateStudent = async (req, res, next) => {
    const student = await Student.findById(req.params.id);
    student.name = req['body']['name']
    student.age = req['body']['age']


    const updatedStudent = await Student.save(student)
    res.status(200).json(updatedStudent)
}
