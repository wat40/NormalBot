// start.js - Pella.app startup script
console.log('Starting Discord Bot...');

// Check if dotenv is available
try {
  require('dotenv');
  console.log('✓ dotenv module found');
} catch (error) {
  console.error('✗ dotenv module not found. Installing dependencies...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✓ Dependencies installed successfully');
  } catch (installError) {
    console.error('✗ Failed to install dependencies:', installError.message);
    process.exit(1);
  }
}

// Start the main bot
require('./index.js'); 