const express = require("express");
const { getItems, createItems, getItem, updatetems, deletetems } = require("../controllers/tracks");
const checkRol = require("../middleware/rol");
const authMiddleware = require("../middleware/session");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();   //este es el manejador de las rutas

router.get("/", authMiddleware, getItems)
router.post("/", authMiddleware, checkRol(["admin"])  ,validatorCreateItem, createItems )
router.get("/:id", authMiddleware, validatorGetItem, getItem)
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updatetems)
router.delete("/:id", authMiddleware, validatorGetItem, deletetems)

module.exports = router;