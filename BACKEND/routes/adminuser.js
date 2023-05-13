var express = require("express");
var router = express.Router();
var admin = require("../model/admin");

//=======post unique=================>

router.post("/adminsignup", async function (req, res) {
  try {
    let postuser = new admin(req.body);
    await postuser.save();
    res.json({
      status: "success",
    });
  } catch (e) {
    if (e.code === 11000) {
      res.json({
        status: "error",
        message: "user already existed",
      });
    } else {
      res.json({
        status: "error",
        message: err,
      });
    }
  }
});

//======================admin login============>

router.post("/adminlogin", async function (req, res) {
  try {
    let data = await admin.findOne({ email: req.body.email });
    if (data?.password === req.body.password) {
      res.json({
        status: "success",
        data: data,
      });
    } else {
      res.json({
        status: "error",
        message: "user not found",
      });
    }
  } catch (err) {
    res.json({
      status: "error",
      message: err,
    });
  }
});

module.exports = router;
