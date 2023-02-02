const router = require ("express").Router()
const htmlRoutes = require ("./HTML")
const apiRoutes = require ("./API")
router.use("/", htmlRoutes)
router.use("/api", apiRoutes)

module.exports = router;