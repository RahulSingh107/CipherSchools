require("./appMongoose")
const Task = require("./model/Task")
const express = require('express');
const app = express();

app.use(express.json()); // this will help us in reading the json body in the thunder client

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
/*THE FOLLOWING ARE THE CREATE,READ,UPDATE,DELETE(C.R.U.D) OPERATIONS 
HERE
 CREATE: POST
 READ: GET
 UPDATE: PUT
 DELETE: DELETE
*/
//create operation
// app.post("/add-task", async (req, res) => {
//     const task = new Task({
//         title: "Test Task",
//         description: "Test Task Description"
//     });
//     await task.save();
//     return res.status(201).send({ message: "saved" })
// })
app.post("/add-task", async (req, res) => {
    const { title, description } = req.body; // Destructure the title and description from the request body

    if (!title || !description) {
        return res.status(400).send({ message: "Title and description are required" });
    }

    try {
        const task = new Task({ title, description });
        await task.save();
        return res.status(201).send({ message: "Task saved", task });
    } catch (error) {
        return res.status(500).send({ message: "Error saving task", error });
    }
});
//read operation
app.get("/get-task", async (req, res) => {
    const taskList = await Task.find();
    return res.status(200).send(taskList);
})
// Update operation
app.put("/update-task/:taskId", async (req, res) => {
    const { taskId } = req.params;

    const updateResult = await Task.updateOne({ _id: taskId }, {
        $set: { ...req.body }
    });
    if (!updateResult.matchedCount) {
        return res.status(404).send({ message: `Task with id ${taskId} was not found` })
    }
    else {
        return res.status(200).send({ mesage: "Update success" })
    }

});
// delete operation
app.delete("/delete-task/:taskId", async (req, res) => {
    const { taskId } = req.params;

    const delete_task = await Task.deleteOne({ _id: taskId });
    if (!delete_task.deletedCount) {
        return res.status(404).send({ message: `Task with id ${taskId} was not found` })
    }
    else {
        return res.status(200).send({ mesage: "Delete success" })
    }

});
//delete all operation (self)
app.delete("/delete-all-tasks", async (req, res) => {
    try {
        const deleteResult = await Task.deleteMany({});
        return res.status(200).send({ message: "All tasks deleted", deletedCount: deleteResult.deletedCount });
    } catch (error) {
        return res.status(500).send({ message: "Error deleting tasks", error });
    }
});

const port = 8080;
app.listen(port, () => { console.log(`server is listening on port ${port}`); });