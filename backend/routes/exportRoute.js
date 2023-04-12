const express = require("express");
const { resumes } = require("../controllers/exportController");
const { isAuthenticatedUser, ensureOfficialPlacementTeam } = require("../middleware/auth");

const router = express.Router();

router.route("/resumes/:company_id").get(isAuthenticatedUser, ensureOfficialPlacementTeam, resumes);

module.exports = router