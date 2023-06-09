const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Got data successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
router.get("/api/product", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Got data successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
router.get("/myproducts", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Got My Products data successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
module.exports = router;