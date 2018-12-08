const express = require("express");
const formData = require("express-form-data");
const os = require("os");
const url = require("./config/keys").mongo_url;
const monk = require("monk");
let app = express();

app.use(express.json());

const options = { uploadDir: os.tmpdir(), autoClean: true };
// parse data with connect-multiparty.
app.use(formData.parse(options));
// clear from the request and delete all empty files (size == 0)
app.use(formData.format());
// change file objects to stream.Readable
app.use(formData.stream());
// union body and files
app.use(formData.union());

const db = monk(url);
db.then(() => {
  console.log("connected correctly to the server");
});
var port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening on port 5000");
});
// app.get("/", (req, res) => {
//   res.send("Server is running!!!! YAY!!!!!");
// });
require("./Routes/api.js")(app, db);
require("./Routes/uploader.js")(app, db);

if (process.env.NODE_ENV !== "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
