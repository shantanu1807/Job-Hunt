import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch(error){
        console.log(error.message);
    }
}
export default connectDB;


// const mongoose = require('mongoose');

// const mongoURL = 'mongodb+srv://shantanu20:shiv2003@cluster0.eo9bl.mongodb.net/'
// // Create a connection to the database.
//  mongoose.connect(mongoURL, { 
//    useNewUrlParser: true,
//  useUnifiedTopology: true 
// })
// // Get the default connection
// // Mongoose maintains a default connection object representing the MongoDB connection, and it is accessible through mongoose.connection.
//  const db = mongoose.connection;

// // Define event listeners for the database connection

//  db.on('connected', () => {
//     console.log('Connected to the MongoDB server!');
//  });

//  db.on('error', (err) => {
//     console.log('MongoDB connection error:', err);
//  });

//  db.on('disconnected', () => {
//     console.log('MongoDB disconnected!');
//  });

//  // Export the database connection
 
//  module.exports = db;

 




