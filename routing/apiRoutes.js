var profiles = require("../data/profiles");
var results = require("../data/results");

module.exports = function (app) {

    app.get("/api/profiles", function (req, res) {
        return res.json(profiles);
    });

    app.get("/api/results", function (req, res) {
        return res.json(results);
    });


    app.post("/api/results", function(req, res) {
        
          results.push(req.body);
          
      });

}