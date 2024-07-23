const express = require("express");
const router = express.Router();
const teamController = require("./team-controller"); // Ensure the correct path and export

// Define routes
router.post("/", teamController.createTeam);
router.put("/", teamController.updateTeam);
router.get("/", teamController.getTeamList);
router.get("/:id", teamController.getTeamById);
router.delete("/:id", teamController.deleteTeam);

module.exports = router; // Export the router