const connection = require("../db/connect");

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        // Insert the user into the database
        const createUserQuery = `
            INSERT INTO Users (email, password)
            VALUES (?, ?)
        `;

        connection.query(createUserQuery, [email, password], (err, results) => {
            if (err) {
                console.error('Error inserting user into database:', err);
                return res.status(500).json('Internal Server error');
            }

            return res.json({ msg: "User registered successfully" });
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json("Internal Server error");
    }
};


const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        // Validate input
        if (!email) {
            return res.status(400).json({ msg: "Email is required" });
        }

        // Query to check if the email exists
        const checkEmailQuery = "SELECT email FROM Users WHERE email = ?";
        
        connection.query(checkEmailQuery, [email], (err, results) => {
            if (err) {
                console.error("Error checking email in database:", err);
                return res.status(500).json({ msg: "Internal Server Error" });
            }

            if (results.length === 0) {
                return res.status(404).json({ msg: "Email not found" });
            }

            return res.json({ msg: "Email exists in the database" });
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = { signin, forgotPassword };
