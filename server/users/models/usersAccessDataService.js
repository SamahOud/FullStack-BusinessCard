const DB = process.env.DB || "MONGODB";
const { generateAuthToken } = require("../../auth/Providers/jwt");
const { comparePassword } = require("../helpers/bcrypt");
const User = require("./mongodb/User");
const lodash = require("lodash");

// Create a new user in the database 
const registerUser = async (normalizedUser) => {
    if (DB === "MONGODB") {
        try {
            const { email } = normalizedUser;
            let user = await User.findOne({ email });
            if (user) throw new Error("User already registered");

            user = new User(normalizedUser);
            user = await user.save();

            user = lodash.pick(user, ["name", "email", "_id"]);
            return Promise.resolve(user);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Register new user not in mongodb");
}

// Login user to the database
const loginUser = async ({ email, password }) => {
    if (DB === "MONGODB") {
        try {
            const user = await User.findOne({ email });
            if (!user) throw new Error('Authentication Error: Invalid email or password');

            const validPassword = comparePassword(password, user.password);
            if (!validPassword) throw new Error('Authentication Error: Invalid email or password')

            const token = generateAuthToken(user)
            return Promise.resolve(token);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Login user not in mongodb");
}

// Get users in the database by username
const getUsers = async () => {
    if (DB === "MONGODB") {
        try {
            const users = await User.find({}, { password: 0, __v: 0 });
            return Promise.resolve(users);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Get users not in mongodb");
}

// Get a specific user in the database using its id
const getUser = async (userId) => {
    if (DB === "MONGODB") {
        try {
            let user = await User.findById(userId, { password: 0, __v: 0 });
            if (!user) throw new Error("Could not find this user in the database");
            return Promise.resolve(user);
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Get user not in mongodb");
}

// Update an existing user in the database with a given user object
const updateUser = async (userId, normalizedUser) => {
    if (DB === "MONGODB") {
        try {
            const user = await User.findByIdAndUpdate(userId, normalizedUser, { new: true, });
            return Promise.resolve(user);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Updated card not in mongodb");
}

// Change business status of a user
const changeUserBusinessStatus = async (userId) => {
    if (DB === "MONGODB") {
        try {
            const pipline = [{ $set: { isBusiness: { $not: "$isBusiness" } } }];
            const user = await User.findByIdAndUpdate(userId, pipline, { new: true }).select(["-password", "-__v"]);

            if (!user) throw new Error("Could not update this user isBusiness status because a user with this ID cannot be found in the database");
            return Promise.resolve(user);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Like card not in mongodb");
}

// Delete a user from the database by its id
const deleteUser = async (userId) => {
    if (DB === "MONGODB") {
        try {
            let user = await User.findById(userId);
            if (user.isAdmin)
                throw new Error("Could not delete admin user");

            user = await User.findByIdAndDelete(userId, { password: 0, __v: 0, });
            if (!user)
                throw new Error("Could not delete this user because a user with this ID cannot be found in the database");
            return Promise.resolve(user);
        } catch (error) {
            error.status = 400;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("Delete card not in mongodb");
}

exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.updateUser = updateUser;
exports.changeUserBusinessStatus = changeUserBusinessStatus;
exports.deleteUser = deleteUser;