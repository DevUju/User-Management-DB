const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUser,
  addUser,
  editUser,
  removeUser,
  getUserByRole,
  getUsersSortedByAge,
  getUsersCountByRole
} = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");
const protect = require("../middlewares/protected");

router.get("/", protect, getUsers);
router.get("/", protect, getUserByRole);
router.get("/users/stats/count", getUsersCountByRole);
router.get("/users/sorted/by-age", getUsersSortedByAge);
router.get("/:id", protect, getUser);
router.post("/", validateUser, addUser);
router.put("/:id", protect, editUser);
router.delete("/:id", protect, removeUser);

module.exports = router;
