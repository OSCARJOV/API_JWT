const express = require("express");
const { getItems, createItems, getItem, updatetems, deletetems } = require("../controllers/tracks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const router = express.Router();   //este es el manejador de las rutas

router.get("/", getItems)
router.post("/", validatorCreateItem, createItems )
router.get("/:id", validatorGetItem, getItem)
router.put("/:id", validatorGetItem, validatorCreateItem, updatetems)
router.delete("/:id",validatorGetItem, deletetems)

module.exports = router;