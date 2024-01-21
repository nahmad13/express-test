const mongoose = require("mongoose");
const Promise = require("bluebird");

class DatabaseConnection {
  constructor() {
    this.connected = false;
  }

  async connect() {
    if (this.connected) {
      // If already connected, return existing connection
      return mongoose.connection;
    }

    const connectUri = process.env.DATABASE_CONNECTION_STRING;
    const user = process.env.DATABASE_USER;
    const pass = process.env.DATABASE_PASSWORD;

    if (!connectUri || !user || !pass) {
      console.log(
        "DATABASE_CONNECTION_STRING, DATABASE_USER, and DATABASE_PASSWORD env vars must be set"
      );
      process.exit(1);
    }

    mongoose.Promise = Promise;
    let connectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    };

    connectOptions.user = user;
    connectOptions.pass = pass;

    await mongoose.connect(connectUri, connectOptions);

    console.log(
      "info",
      "Connected to mongo successfully with options",
      connectOptions
    );

    mongoose.connection.on("error", (error) => {
      console.log("error", "Mongoose connection error", error);
    });

    this.connected = true;
    return mongoose.connection;
  }
}

const databaseConnectionInstance = new DatabaseConnection();

module.exports = databaseConnectionInstance;
