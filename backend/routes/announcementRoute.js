const express = require("express");
const { getAll, add } = require("../controllers/announcementController");
const { isAuthenticatedUser, ensureOfficialPlacementTeam } = require("../middleware/auth");

const router = express.Router();

router.route("/getAll").get(isAuthenticatedUser, getAll);
router.route("/add").post(isAuthenticatedUser, ensureOfficialPlacementTeam, add);

module.exports = router