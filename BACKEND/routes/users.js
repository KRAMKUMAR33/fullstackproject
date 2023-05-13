var express = require("express");
var router = express.Router();
var users = require("../model/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//=======post unique=================>

router.post("/usersignup", async function (req, res) {
  try {
    let postuser = new users(req.body);
    await postuser.save();
    res.json({
      status: "user register successfully",
    });
  } catch (e) {
    if (e.code === 11000) {
      res.json({
        status: "user already existed",
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

//======================user login============>

router.post("/login", async function (req, res) {
  try {
    let data = await users.findOne({ email: req.body.email });
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
