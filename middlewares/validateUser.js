function validateUser(req, res, next) {
    const { name, email, age } = req.body;

    if (!name || name.trim().length < 2) {
        return res.status(400).json({
            success: false,
            message: "Validation failed: A valid email address is required"
        })
    }

    if (!age || isNaN(Number(age)) || Number(age) <= 0) {
        return res.status(400).json({
            success: false,
            message: "Validation failed: Age must be a positive number"
        })
    }

    next();
}

module.exports = validateUser;