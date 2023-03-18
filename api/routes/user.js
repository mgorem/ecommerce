const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("usertest is successful!");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.status(200).send(username);
});

module.exports = router;
