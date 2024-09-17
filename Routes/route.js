const express = require("express");
const router = express.Router();
const {getAllproduct, postData, deleteData, updateData} = require("../Controller/controller")
router.get("/api/getalldata", getAllproduct)
router.post("/api/postData", postData);
router.put("/api/deletedata", deleteData)
router.put("/api/updatedata/:id", updateData)

module.exports = router;