// server/index.ts
// ... (keep your current imports)

const app = express();

const possiblePaths = [
  path.join(process.cwd(), "dist"), // Vercel's root output folder
  path.join(process.cwd(), "dist", "public"), // Potential sub-folder
  path.resolve(__dirname), // Current folder (fallback)
  path.resolve(__dirname, "..", "dist"), // Local development fallback
];

let staticPath =
  possiblePaths.find(p => fs.existsSync(path.join(p, "index.html"))) ||
  possiblePaths[0];

app.use(express.static(staticPath));

app.get("*", (_req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  res.sendFile(indexPath, err => {
    if (err) {
      // DEBUG: If this fails, the error message will now tell us EXACTLY what Vercel sees
      res.status(404).send(`System Error: Assets not found. 
        Searched: ${staticPath}
        Working Dir: ${process.cwd()}
        File exists at staticPath: ${fs.existsSync(indexPath)}`);
    }
  });
});

export default app;
// ... (keep the rest)
