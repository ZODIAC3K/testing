import cors from "cors";
import express from "express";
import connectToMongo from "./config/db.js";
import galleryRoutes from "./routes/gallery.js";
const app = express();

// API Routes
app.use(cors());

app.use(express.json());

app.use("/", (req, res) => {
    res.send("Backend is running");
});


app.use("/api/v1", galleryRoutes);

app.use(express.static("public/upload"));

const PORT = 8000;

connectToMongo();
app.listen(PORT, () => {
  console.log(`api is running on http://localhost:${PORT}`);
});
