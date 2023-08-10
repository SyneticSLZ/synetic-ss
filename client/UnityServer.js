const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5400;

// Serve the static content from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the index1.html file as the entry point
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/unity-build', 'index1.html'));
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});

    // "start": "concurrently \"nodemon UnityServer.js\" \"nodemon StripeBackend.js\""