const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser")
const cors = require("cors");
const helmet = require("helmet")

// routers
const indexRouter = require("./routes/index")
const studentRouter = require("./routes/studentRouter");

const app = express();
const PORT = 8888;
const DB_PORT = 27017;
const dbURI = `mongodb://localhost:${DB_PORT}/school`

// middleware
app.use(bodyParse.json());

app.get("/test", (req, res, next) => {
    console.log("abc")
    res.send("as")
})

// route
app.use("/", indexRouter)
app.use("/students", studentRouter)

// with mongoDB
mongoose.connect(dbURI)
    .then(() => { console.log("connected to mongoDB") })
    .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// error handler
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({
        message: "something error"
    })
})