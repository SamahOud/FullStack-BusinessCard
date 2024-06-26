const express = require("express");
const { handleError } = require("../../utils/handleErrors");
const { registerUser, loginUser, getUsers, getUser, updateUser, changeUserBusinessStatus, deleteUser, } = require("../models/usersAccessDataService");
const { validateRegistration, validateLogin, validateUserUpdate, } = require("../validations/userValidationService");
const normalizeUser = require("../helpers/normalizeUser");
const { generateUserPassword } = require("../helpers/bcrypt");
const { auth } = require("../../auth/authService");
const router = express.Router();

// POST /users - Create new user account.
router.post("/", async (req, res) => {
    try {
        let user = req.body;
        const { error } = validateRegistration(user);
        if (error)
            return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

        user = normalizeUser(user);
        user.password = generateUserPassword(user.password)
        user = await registerUser(user);
        return res.status(201).send(user);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
})

// POST /users/login - Login user. Returns a JSON Web Token to authenticate the user. 
router.post("/login", async (req, res) => {
    try {
        let user = req.body;
        const { error } = validateLogin(user);
        if (error)
            return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

        const token = await loginUser(req.body);
        return res.send(token);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// GET /users - Get all users. Only accessible for admins. Requires authentication.
router.get("/", auth, async (req, res) => {
    try {
        const user = req.user;
        if (!user.isAdmin)
            return handleError(res, 403, "Access denied, You must be an admin user to see all users in the database");

        const users = await getUsers();
        return res.send(users);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// GET /users/:id  - Get user. Accessible by any logged in user. Requires authentication.    
router.get("/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const { _id, isAdmin } = req.user;

        // If not admin 
        if (_id !== id && !isAdmin) {
            return handleError(res, 403, "Access denied, You must be an admin type user or the registered user to see this user");
        }
        const user = await getUser(id);
        return res.send(user);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// PUT /users/:id - Update user. Only accessible for admins. Requires authentication.
router.put("/:id", auth, async (req, res) => {
    try {
        const userId = req.params.id; // URL user ID
        const user = req.body;        // Body user object

        // Check if the current user is not the owner of the account and is not an admin
        if (userId !== req.user._id && !req.user.isAdmin)
            return handleError(res, 403, "Authorization Error: You must be the registered user to update its details");

        const { error } = validateUserUpdate(user);
        if (error)
            return handleError(res, 400, `Joi Error: ${error.details[0].message}`);

        const normalizedUser = normalizeUser(user);
        const newUser = await updateUser(userId, normalizedUser);
        return res.send(newUser);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// PATCH /users/:id - Change user business status. Only accessible for admins. Requires authentication.
router.patch("/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.user;

        if (id !== user._id && !user.isAdmin)
            return handleError(res, 403, "Authorization Error: You must bean an admin type user or the registered user to update its business status");

        const changedStatusUser = await changeUserBusinessStatus(id);
        return res.send(changedStatusUser);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

// DELETE /users/:id - Delete user. Only accessible for admins. Requires authentication.
router.delete("/:id", auth, async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.user;

        if (id !== user._id && !user.isAdmin)
            return handleError(res, 403, "Authorization Error: You must be an admin type user or the registered user to delete this user");

        const userDeleted = await deleteUser(id);
        return res.send(userDeleted);
    } catch (error) {
        return handleError(res, error.status || 500, error.message);
    }
});

module.exports = router;
