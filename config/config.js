import dotenv from "dotenv";
dotenv.config();

const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "yourSecretKey", 
    mongoUri: process.env.MONGO_URI // This will now correctly pull from your .env
};

export default config;