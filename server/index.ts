import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from dist/public
// On Vercel, 'dist/public' is usually flattened relative to the server file
const staticPath = path.resolve(__dirname, "..", "dist", "public");

app.use(express.static(staticPath));

// Handle client-side routing
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// CRITICAL: Vercel needs the 'app' exported to handle the serverless lifecycle
export default app;

// Only listen if running locally (not on Vercel)
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Local dev server running on http://localhost:${port}/`);
  });
}
