import { v2 as cloudinary } from "cloudinary";
import http from "http";
import connectDB from "./utils/db";
import { initSocketServer } from "./socketServer";
import { app } from "./app";
import cors from "cors";
require("dotenv").config();
const server = http.createServer(app);

app.use(
  cors({
    origin: "https://code-to-destiny-client-seven.vercel.app",
    credentials: true, // If your client application sends credentials (e.g., cookies), set this to true
  })
);

// cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketServer(server);

// create server
server.listen(process.env.PORT, () => {
  console.log(`Server is connected with port ${process.env.PORT}`);
  connectDB();
});
