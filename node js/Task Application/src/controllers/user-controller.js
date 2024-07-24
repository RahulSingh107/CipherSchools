const User = require("../model/User");
const addNewUser = async (req, res) => {
    try {
        const { name, email, age, password } = req.body;
        const user = new User({ name, email, age, password })
        await user.save();
        return res.status(201).send({ message: "User created successfully" });
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: err.message });
    }
}
const loginUser = async (req, res) => {
    // code for login user 
    try {
        const { email, password } = req.body;
        const user = await User.findByEmailAndPasswordForAuth(email, password);
        console.info(`User with email ${email} successfully logged in`);
        return res.status(200).send(user);

    }
    catch (err) {
        return res.status(500).send({ message: 'login failed' });
    }
}
module.exports = { addNewUser, loginUser }