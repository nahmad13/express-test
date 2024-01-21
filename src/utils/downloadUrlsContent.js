// Problem no 1 : downloads the contents from each URL in array of urls using asynchronous methods

const axios = require("axios");

async function downloadUrlsContent(urls) {
  return Promise.all(urls.map((url) => downloadContent(url)));
}

async function downloadContent(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.statusText);
  }
}

module.exports = { downloadUrlsContent };
