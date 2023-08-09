const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5400;

// Serve the Unity WebGL game files from the public/unity-build directory
app.use(express.static(path.join(__dirname, '../public/unity-build')));

// Route to serve the index1.html file as the entry point for the Unity game
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/unity-build', 'index1.html'));
});

app.listen(port, () => {
  console.log(`Express server running on http://localhost:${port}`);
});
    // "start": "concurrently \"nodemon UnityServer.js\" \"nodemon StripeBackend.js\""