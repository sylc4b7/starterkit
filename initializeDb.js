const mongoose = require("mongoose");
const Student = require("./models/Student"); // Corrected path to the Student model

// MongoDB connection URI
const dbURI = "mongodb://localhost:27017/school"; // Connect to the 'school' database

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
	console.log("Connected to MongoDB");

	// Create a new student document
	const newStudent = new Student({
	  name: "John Doe",
	  age: 20
	});

	// Save the student document to the 'students' collection
	return newStudent.save();
  })
  .then((result) => {
	console.log("Student saved:", result);
	mongoose.connection.close(); // Close the connection after saving
  })
  .catch((err) => {
	console.error("Error:", err);
	mongoose.connection.close(); // Close the connection on error
  });