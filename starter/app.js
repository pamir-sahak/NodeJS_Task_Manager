const express = require("express");
const app = express();
const tasks = require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config()
const notFound = require("./middleware/notfound")
const errorHandlerMiddleware = require("./middleware/error")
// middlewaree
app.use(express.static('./public'))
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks)

// middlewares
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

// starting server only if we connected to db successfully
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log("server is on..."))
    }
    catch{
        console.log(error)
    }
}

start()
