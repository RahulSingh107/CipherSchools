//component to create the user model
const { model, Schema } = require("mongoose")
const { isEmail } = require("validator")
const bcrypt = require("bcrypt");
const { encryptPassword, checkPassword } = require("../bcrypt");
const UserSchema = new Schema({
    name: { type: String, trim: true, required: true },
    email: {
        type: String, trim: true, lowercase: true, unique: true,
        validate: {
            validator(email) {
                return isEmail(email)
            }
        }
    },
    age: {
        type: Number, required: true, validate: {
            validator(age) {
                if (age < 0) {
                    throw new Error(`Age should be a positive number`)
                }
            }
        }
    },
    password: {
        type: String, required: true, trim: true, minlength: 8, validate: {
            validator(password) {
                if (password.includes(" ") || password.includes("\n") || password.includes("\t")) {
                    throw new Error(`Password should not contain any whitespace characters
                     or newline characters`)
                }
                if (password.toLowerCase().includes("password")) {
                    throw new Error(`Password should not contain the word 'password'`)
                }
            },
        }
    }
},
    { timestamps: true }
);

// Signing in with email and password
UserSchema.statics.findByEmailAndPasswordForAuth = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Invalid email");
        }
        const isMatch = await checkPassword(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid password");
        }

        if (password === user.password) {
            console.log(`Login Successful`);
            return user;
        }
    }
    catch (err) {
        console.error(err);
        throw err;
    }

}
// this function will encrypt the password just before it is put in the data base (.pre means before)
UserSchema.pre("save", async function (next) {
    const user = this;
    if (user.modifiedPaths().includes("password")) {
        user.password = await encryptPassword(user.password)

    }
    next();
});
const User = model("User", UserSchema);

module.exports = User;