// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
 * PRECISION PATHING:
 * In production, this script runs from 'dist/index.js'.
 * The 'index.html' is sitting right next to it in the same 'dist' folder.
 */
const staticPath =
  process.env.NODE_ENV === "production"
    ? __dirname
    : path.resolve(__dirname, "..", "dist");

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  // We explicitly check if index.html exists in the path to avoid "Not Found"
  res.sendFile(path.join(staticPath, "index.html"), err => {
    if (err) {
      res
        .status(404)
        .send("System Error: Frontend assets not found in dist folder.");
    }
  });
});

export default app;

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Local dev server running on http://localhost:${port}/`);
  });
}
