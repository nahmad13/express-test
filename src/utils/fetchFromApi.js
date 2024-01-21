// Problem 2 : A function that fetches data from an API endpoint. Implement proper error handling to handle various HTTP status codes and network failures
const axios = require("axios");

async function fetchDataFromAPI(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    if (error.response) {
      handleApiError(error.response.status);
    } else if (error.request) {
      handleApiError(500, "No response received from the server");
    } else {
      handleApiError(500, "Error setting up the request: " + error.message);
    }
  }
}

function handleApiError(statusCode, additionalMessage = "") {
  switch (statusCode) {
    case 400:
      throw new Error(`Bad Request (${statusCode}) : ${additionalMessage}`);
    case 401:
      throw new Error(`Unauthorized (${statusCode}) : ${additionalMessage}`);
    case 403:
      throw new Error(`Forbidden (${statusCode}) : ${additionalMessage}`);
    case 404:
      throw new Error(`Not Found (${statusCode}) : ${additionalMessage}`);
    case 500:
      throw new Error(
        `Internal Server Error (${statusCode}) : ${additionalMessage}`
      );
    default:
      throw new Error(
        `Unexpected Error (${statusCode}) : ${additionalMessage}`
      );
  }
}

module.exports = { fetchDataFromAPI };
