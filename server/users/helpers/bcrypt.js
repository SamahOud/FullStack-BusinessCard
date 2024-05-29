const bcrypt = require("bcryptjs");

const generateUserPassword = password => {
    return bcrypt.hashSync(password, 10);
}

const comparePassword = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}

exports.generateUserPassword = generateUserPassword
exports.comparePassword = comparePassword