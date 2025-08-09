const mongoose = require("mongoose");

const stduentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: false
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model("Student", stduentSchema)