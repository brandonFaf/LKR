const express = require("express");
const fs = require("fs");
const AWS = require("aws-sdk");
const keys = require("../config/keys");
const moment = require("moment");
const path = require("path");

const s3 = new AWS.S3({
  accessKeyId: keys.MY_AWS_ACCESS_KEY_ID,
  secretAccessKey: keys.MY_AWS_SECRET_ACCESS_KEY
});

module.exports = (app, db) => {
  if (process.env.NODE_ENV !== "production") {
    app.use(express.static("../uploader"));
    app.get("/upload", (req, res) => {
      res.sendFile(path.resolve(__dirname, "..", "uploader", "index.html"));
    });

    const upload = (req, res) => {
      console.log("body: " + JSON.stringify(req.body, null, 2));
      const {
        title,
        audio,
        duration,
        summary,
        fileName,
        episode,
        file_size
      } = req.body;
      console.log("reading file");
      fs.readFile(audio.path, function(err, data) {
        if (err) {
          console.log(err);
          res.status(500);
          res.json({
            message: "Error reading file",
            error: err
          });
        }
        fs.writeFile("/Users/brandonmyers/Desktop/test.mp3", data, err => {
          if (err) {
            console.log("error in writing mp3: ", err);
          }
        });
        fs.writeFile(
          "/Users/brandonmyers/Desktop/testJson.mp3",
          JSON.stringify(data, null, 2),
          err => {
            if (err) {
              console.log("error in writing mp3: ", err);
            }
          }
        );

        const params = {
          ACL: "public-read",
          Bucket: `LifeKnockingTest/audios/${episode}`,
          Key: fileName,
          Body: data,
          ContentType: "audio/mp3"
        };
        console.log("uploading file");

        s3.upload(params, function(s3Err, data) {
          if (s3Err) {
            res.status(500);
            res.json({
              message: "Error uploading file",
              error: s3Err
            });
          }
          console.log(data);
          const date_published = moment().format();
          const podcast = {
            id: episode,
            url: data.Location,
            title,
            summary,
            date_published,
            duration,
            file_size
          };
          console.log("inserting file");
          db.get("episode")
            .insert(podcast)
            .then(docs => {
              console.log("All Good!!!");
              res.status(200);
              res.json({
                message: "All GOOD!!!"
              });
            })
            .catch(err => {
              res.status(500);
              res.json({
                message: "Error saving to database",
                error: err
              });
            });
        });
      });
    };
    app.post("/upload", upload);
  }
};
