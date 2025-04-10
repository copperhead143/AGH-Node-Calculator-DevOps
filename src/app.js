// src/app.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// Uzyskanie __dirname w module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serwowanie plików statycznych z folderu public
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});

export default app;
