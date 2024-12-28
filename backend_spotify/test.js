const path = require('path');
const userPath = path.join(__dirname, 'models', 'User.js');
console.log('Resolved path to User model:', userPath);

try {
  const User = require(userPath);
  console.log('User model loaded successfully');
} catch (error) {
  console.error('Error loading User model:', error);
}
