const dotenv = require("dotenv");
dotenv.load({ path: ".env" });
const app = require("./server.js");
const databaseConnectionInstance = require("../src/db/index");

const startup = async () => {
  /**
   * Connect to DB and start express server, in that order.
   */
  await databaseConnectionInstance.connect();
  return new Promise((resolve) => {
    app.listen(app.get("port"), () => {});

    return resolve(app);
  });
};

const returnApp = startup();
module.exports = returnApp;
