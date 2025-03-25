require("dotenv").config();
const express = require("express");
const cors = require("cors");


const authRoutes = require("./src/routes/authRoutes");

const app = express();
const PORT =  8000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Crackwise Backend is Running...");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    
});
