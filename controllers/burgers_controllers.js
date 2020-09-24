const express = require("express");
const router = express.Router();
const burger = require("../models/burger");


router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let hdbrsObj = {burgers: data};
    res.render("index", hdbrsObj)
  })
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(res) {
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
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
