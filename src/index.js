// Second Aproch
 import dotenv from "dotenv";
 import connectDB from "./db/index.js"
 import express from "express";
 const app = express(); 

dotenv.config({
    path: './env'
})
connectDB()
 .then(() => {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MONGO db connection failed !!!", err);
  });



//   First Aproch 

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express";
// const app = express()
//     (async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error", (error) => {
//                 console.log("ERRR:", error);
//                 throw error
//             })
//             app.listen(process.env.PORT, () => {
//                 console.log(`Server Running at http//localhost:${process.env.PORT}`)
//             })
//         } catch {
//             console.error("ERROR:", error)
//         }
//     })()

