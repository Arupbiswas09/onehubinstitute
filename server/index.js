import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Route imports
import courseRoutes from "./routes/courses.js";
import userRoutes from "./routes/users.js";
import inquiryRoutes from "./routes/inquiries.js";
// import facultyRoutes from './routes/faculty.js';
// import testimonialRoutes from "./routes/testimonials.js";
// import blogRoutes from "./routes/blog.js";
import curriculumRoutes from "./routes/curriculum.js";

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);
app.use("/api/inquiries", inquiryRoutes);
// app.use("/api/faculty", facultyRoutes);
// app.use("/api/testimonials", testimonialRoutes);
// app.use("/api/blog", blogRoutes);
app.use("/api/curriculum", curriculumRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
  });
}

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
