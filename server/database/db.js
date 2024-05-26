// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;

  const URL = `mongodb+srv://${username}:${password}@cluster0.gbmeo9v.mongodb.net/Watsapp_clone?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error.message);
  }
};

export default Connection;
