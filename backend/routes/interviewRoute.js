const express = require("express");
const { getAll, getAll_admin, getOne, add, changeStatus, edit } = require("../controllers/interviewController");
const { isAuthenticatedUser, ensureStudent, ensureOfficialPlacementTeam } = require("../middleware/auth");

const router = express.Router();

router.route("/getAll").get(isAuthenticatedUser, getAll);
router.route("/getAll_admin").get(isAuthenticatedUser, ensureOfficialPlacementTeam, getAll_admin);
router.route("/getOne/:experience_id").get(isAuthenticatedUser, getOne);
router.route("/add").post(isAuthenticatedUser, ensureStudent, add);
router.route("/changeStatus").post(isAuthenticatedUser, ensureOfficialPlacementTeam, changeStatus);
router.route("/edit").post(isAuthenticatedUser, ensureOfficialPlacementTeam, edit);

module.exports = router