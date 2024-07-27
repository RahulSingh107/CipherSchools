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
        const token = user.generateToken();
        console.info(`User with email ${email} successfully logged in`);
        return res.status(201).send({ user, token });
    }
    catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'login failed' });
    }
};
// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findByEmailAndPasswordForAuth(email, password);
//         const token = user.generateToken();
//         console.info(`User with email ${email} successfully loged in.`);
//         return res.status(201).send({ user, token });
//     } catch (err) {
//         console.log(err);
//         return res.status(404).send({ message: "Login Falied!" });
//     }
// };
const deleteUser = async (req, res) => {
    const { user } = req;
    const deleteResult = await User.deleteOne({ _id: user._id })
    if (deleteResult.deletedCount === 0) {
        console.error(`Delete failed! User with Id ${req.params.id} was not found`)
        return res.status(404).send({
            message: `Delete failed! User with Id ${req.params.id}
         was not found` })
    }
    console.info(`Delete Success: User with ID ${user._id} was deleted`)
    return res.status(200).send({ message: 'User deleted successfully' })

}
module.exports = { addNewUser, loginUser, deleteUser }