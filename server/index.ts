// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// PRECISION FIX: Your build script puts everything in the root of 'dist'
const staticPath = path.resolve(__dirname);

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  // Point to the index.html that Vite placed in the dist folder
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Local dev server running on http://localhost:${port}/`);
  });
}
