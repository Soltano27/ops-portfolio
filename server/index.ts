// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/**
 * PRECISION FIX:
 * In production, this file is bundled into 'dist/index.js'.
 * Vite also puts 'index.html' into the 'dist' folder.
 * Therefore, the static files are in the same folder as this running script.
 */
const staticPath =
  process.env.NODE_ENV === "production"
    ? __dirname
    : path.resolve(__dirname, "..", "dist");

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Local dev server running on http://localhost:${port}/`);
  });
}
