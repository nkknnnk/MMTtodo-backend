const express = require("express");
const router = express.Router();

const { mediaController, download } = require("../controllers/videoDownloaderController");


router.post("/download", mediaController);
router.post("/downloader", download);

module.exports = router;
