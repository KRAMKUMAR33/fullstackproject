var express = require("express");
var router = express.Router();
const articles = require("../model/articles");

//======post method======>

router.post("/", async function (req, res) {
  try {
    const postart = new articles(req.body);
    await postart.save();
    res.json({
      status: "this article posted successfully",
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err,
    });
  }
});

//=========get method==========>

router.get("/", async function (req, res) {
  try {
    let data = await articles.find();
    res.json({
      status: "success",
      data: data,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err,
    });
  }
});

//=====================update==============>

router.put("/:update", async function (req, res) {
  try {
    await articles.findByIdAndUpdate(req.params.update, req.body);
    res.json({
      status: "this article updated successfully",
    });
  } catch (err) {
    res.json({
      status: "error",
      meassage: err,
    });
  }
});

//===================delete=================>
router.delete("/:delete", async function (req, res) {
  try {
    await articles.findByIdAndDelete(req.params.delete, req.body);
    res.json({
      status: "success",
    });
  } catch (err) {
    res.json({
      status: "error",
      meassage: err,
    });
  }
});

//===============get method by id============>

router.get("/:getid", async function (req, res) {
  try {
    let data = await articles.findById(req.params.getid, req.body);
    res.json({
      status: "success",
      data: data,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err,
    });
  }
});

module.exports = router;
