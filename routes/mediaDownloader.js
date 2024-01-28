const express = require("express");
const router = express.Router();

const { mediaController } = require("../controllers/videoDownloaderController");


router.post("/download", mediaController);

module.exports = router;
