// Creating a new moongoose schema 

/**
 * This file defines a Mongoose schema for a Task model.
 * The schema includes fields for title, description, isComplete, and timestamps.
 * The owner field is commented out for now, but can be uncommented and configured
 * to reference a User model.
*/

// Importing required modules
// const { model, Schema } = require("mongoose");

// /**
//  * Defines a Mongoose schema for a Task.
//  * @typedef {Object} TaskSchema
//  * @property {String} title - The title of the task.
//  * @property {String} description - The description of the task.
//  * @property {Boolean} isComplete - Indicates whether the task is complete.
//  * @property {Date} createdAt - The timestamp of when the task was created.
//  * @property {Date} updatedAt - The timestamp of when the task was last updated.
//  * @property {Schema.Types.ObjectId} owner - The ID of the user who owns the task.
//  */

// const TaskSchema = new Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     isComplete: { type: Boolean, default: false },
//     // owner: { type: Schema.Types.ObjectId, required: true, ref: "User" },
// },
//     { timestamps: true }
// );

// /**
//  * Creates and exports a Mongoose model based on the TaskSchema.
//  * @type {Model<TaskSchema>}
//  */
// const TaskModel = model("Task", TaskSchema);
// module.exports = TaskModel;
const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
    // owner: { type: Schema.Types.ObjectId, required: true, ref: "User" },
},
    { timestamps: true }
);

const TaskModel = model("Task", TaskSchema);
module.exports = TaskModel;

