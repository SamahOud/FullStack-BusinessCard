const config = require("config");
const { handleError } = require("../utils/handleErrors");
const { verifyAuthToken } = require("./Providers/jwt");
const tokenGenerator = config.get("TOKEN_GENERATOR") || "jwt";

// auth is the middleware function for authentication
const auth = (req, res, next) => {
    if (tokenGenerator === "jwt") {
        try {
            // header x-auth-token is required for jwt authentication
            const tokenFromClient = req.header("x-auth-token")

            // Check if not token is returned
            if (!tokenFromClient) return handleError(res, 401, "Access denied. No token provided")

            const decoded = verifyAuthToken(tokenFromClient);
            if (!decoded) return handleError(res, 400, "Invalid token")

            req.user = decoded; // Attach decoded token to request object
            return next();
        } catch (err) {
            return handleError(res, 401, err.message)
        }
    }
    return handleError(res, 500, "You don't use jwt")
}

exports.auth = auth