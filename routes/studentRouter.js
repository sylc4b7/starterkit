let express = require("express")
let router = express.Router()

let studentController = require("../controllers/studentController")

//getAllStudents
router.get("/", studentController.getAllStudents)
// create student
router.post("/", studentController.createStudent)
// get student by id
router.get("/:id", studentController.getStudentByid)
// update stduent by id
router.put("/:id", studentController.updateStudent)
// deleteStudent by id
router.delete("/:id", studentController.deleteStudent)



// /student/courses
// router.get("/course",getAllCourse);
module.exports = router;