require("./appMongoose")
const Task = require("./model/Task")
const express = require('express');
const app = express();

app.get('/',
    (req, res) => {
        res.send('Hello, World!');
    })
app.get('/add',
    (req, res) => {
        let { a: firstNumber, b: secondNumber } = req.query;
        let sum = parseInt(firstNumber) + parseInt(secondNumber);
        res.send({ sum });
    });
app.post("/add-task", async (req, res) => {
    const task = new Task({
        title: "Test Task",
        description: "Test Task Description"
    });
    await task.save();
    return res.status(201).send({ message: "saved" })
})
const port = 8080;
app.listen(port, () => { console.log(`server is listening on port ${port}`); });