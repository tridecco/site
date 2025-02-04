/**
 * @fileoverview Routes Index
 * @description Index file for routes.
 */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.render("pages/home");
});

router.get("/about", (req, res) => {
  return res.render("pages/about");
});

router.get("/instructions", (req, res) => {
  return res.render("pages/instructions");
});

router.get("/story", (req, res) => {
  return res.render("pages/story");
});

module.exports = router;
