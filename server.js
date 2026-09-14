import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Parse form + JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Optional contact endpoint (works even without Resend)
app.post("/contact", async (req, res) => {
  console.log("New contact message:", req.body);
  res.json({ ok: true });
});

// Railway port binding
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Cast website running on port ${PORT}`);
});
