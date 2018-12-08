const generateXml = require("../helpers/GenerateXml.js");

module.exports = (app, db) => {
  app.get("/api/episodes", (req, res) => {
    db.get("episode")
      .find()
      .then(episodes => {
        res.json({ episodes });
      });
  });
  app.get("/api/episode/:id", (req, res) => {
    db.get("episode")
      .find({ id: req.params.id })
      .then(episode => {
        res.json({ episode });
      });
  });
  app.get("/feed", (req, res) => {
    db.get("episode")
      .find()
      .then(episodes => {
        res.type("application/xml");
        res.send(generateXml(episodes));
      });
  });
};
