const fs = require("fs");
const path = require("path");

async function listFiles(directoryPath, fileExtension = ".txt") {
  try {
    const files = fs.readdirSync(directoryPath);
    const filteredFiles = files.filter(
      (file) => path.extname(file) === `.${fileExtension}`
    );
    return filteredFiles;
  } catch (error) {
    throw new Error("Error reading directory:", error);
  }
}

module.exports = { listFiles };
