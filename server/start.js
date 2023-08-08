const { spawn } = require('child_process');

const indexProcess = spawn('node', ['UnityServer.js']);
const stripeProcess = spawn('node', ['StripeBackend.js']);

indexProcess.stdout.on('data', (data) => {
  console.log(`index.js: ${data}`);
});

stripeProcess.stdout.on('data', (data) => {
  console.log(`stripe.js: ${data}`);
});
