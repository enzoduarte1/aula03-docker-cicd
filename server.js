const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = '1.0.1';

app.get('/', (req, res) => {
  res.json({ message: 'API versionada', version: VERSION });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: VERSION });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} (v${VERSION})`);
});
