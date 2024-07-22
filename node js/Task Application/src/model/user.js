//component to create the user model
const { model, schema } = require("mongoose")
const UserSchema = new Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, lowercase: true, unique: true },
    age: { type: Number, required: true, },
    password: { type: String, required: true, trim: true, minlength: 8 },
}, { timestamps: true }
)
const User = model("User", UserSchema);

module.exports = User;