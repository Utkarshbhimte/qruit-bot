import mongoose = require("mongoose");
const { MONGO_URL: mongoUrl } = process.env as Record<string, string>;

if (!mongoUrl) {
  console.error("Mongo url is not valid");
  process.exit();
}

mongoose.connect(mongoUrl);

mongoose.connection.on("connected", function() {
  console.log("Mongoose default connection is open to ", mongoUrl);
});

mongoose.connection.on("error", function(err) {
  console.log("Mongoose default connection has occured " + err + " error");
});

mongoose.connection.on("disconnected", function() {
  console.log("Mongoose default connection is disconnected");
});

process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log(
      "Mongoose default connection is disconnected due to application termination"
    );
    process.exit(0);
  });
});
