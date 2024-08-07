const jwt = require("jsonwebtoken");
const CS_SECRET_KEY = "CSSecretKey";
const generateToken = (payload) => {
    const token = jwt.sign(payload, CS_SECRET_KEY, { expiresIn: "1h" });
    return token
}
const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, CS_SECRET_KEY);
        return { isValidToken: true, payload }
    } catch (err) {
        console.error("Token verification error: ", err);
        return { isValidToken: false, payload: undefined }
    }
}

module.exports = { generateToken, verifyToken }
