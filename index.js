const fs = require('fs');
const path = require('path');

// Function to format the current date and time
function getCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

// Get the current timestamp
const currentTimestamp = Date.now();

// Create a filename with the current date and time
const filename = `${getCurrentDateTime()}.txt`;

// Write the current timestamp to the file
fs.writeFile(filename, currentTimestamp.toString(), (err) => {
  if (err) {
    console.error('Error saving timestamp:', err);
  } else {
    console.log('Timestamp saved in the file:', filename);
  }
});

