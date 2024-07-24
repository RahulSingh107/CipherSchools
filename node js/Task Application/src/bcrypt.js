const bcrypt = require("bcrypt");
const encryptPassword = async (plainTextPassword) => {
    try {
        return await bcrypt.hash(plainTextPassword, 8)
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};

const checkPassword = async (plainTextPassword, encryptedPassword) => {
    try {
        return await bcrypt.compare(plainTextPassword, encryptedPassword)
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};
module.exports = { checkPassword, encryptPassword };