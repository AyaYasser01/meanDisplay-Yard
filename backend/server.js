const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const frontendPath = path.join(__dirname, '../frontend/dist/frontend/browser');

// Serve static files
app.use(express.static(frontendPath));

// Fallback to Angular index.html
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server running on http://localhost:${PORT}');
});
