const router = require("express").Router();
const {
  getProjects,
  createProject
} = require("../controllers/projectController");

router.get("/", getProjects);
router.post("/", createProject);

module.exports = router;
