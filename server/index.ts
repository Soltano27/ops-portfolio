// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// PRECISION LOGIC: Check both the current directory and the parent directory
const possiblePaths = [
  path.resolve(__dirname),
  path.resolve(__dirname, "..", "dist"),
  path.resolve(__dirname, "public"),
];

let staticPath =
  possiblePaths.find(p => fs.existsSync(path.join(p, "index.html"))) ||
  possiblePaths[0];

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  const indexPath = path.join(staticPath, "index.html");

  res.sendFile(indexPath, err => {
    if (err) {
      // If still not found, let's output the searched path for debugging
      res
        .status(404)
        .send(`System Error: Assets not found. Searched in: ${staticPath}`);
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
