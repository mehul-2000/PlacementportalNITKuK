const express = require("express");
const { resume } = require("../controllers/uploadController");
const { isAuthenticatedUser, ensureStudent } = require("../middleware/auth");

const router = express.Router();

router.route("/resume").post(isAuthenticatedUser, ensureStudent, resume);

module.exports = router