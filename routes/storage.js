const multer = require("multer") // paquete para cargar archivos
const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const { createItems, getItem, getItems, deletetems } = require("../controllers/storage");
const { validatorGetItem } = require("../validators/storage");
const router = express.Router();



router.get("/:id", validatorGetItem, getItem)

router.get("/", getItems)


router.post("/",  uploadMiddleware.single("myfile"), createItems)

router.delete("/:id",validatorGetItem ,deletetems )

//router.update("/", updatetems)

module.exports = router;