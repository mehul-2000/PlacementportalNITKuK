const express = require("express");
const { add, getAll, remove } = require("../controllers/coordinatorController");
const { isAuthenticatedUser, ensureAdmin } = require("../middleware/auth");

const router = express.Router();

router.route("/add").post(isAuthenticatedUser, ensureAdmin, add);
router.route("/getAll").get(isAuthenticatedUser, ensureAdmin, getAll);
router.route("/remove").delete(isAuthenticatedUser, ensureAdmin, remove);

module.exports = router