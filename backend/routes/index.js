const router = require("express").Router()

const controller = require("../controllers")

router.get("/health", (req, res) => {
    res.json({status: "Okay"})
})

router.post("/generate", controller.generateImage)

module.exports = router