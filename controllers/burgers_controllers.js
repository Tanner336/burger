const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let burgerObject = {burgers: data};
    res.render("index", burgerObject)
  })
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    req.body.name, req.body.devoured], function(res) {
      res.json({id: res.insertId})
      res.redirect('/index');
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(res) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
