const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const product = require('./api/product');
const app = express();
const PORT = process.env.PORT || 5050;
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/", product);
//---------------------------------------------------------

app.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Got data ++++++ successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
app.get("/api/product", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Got data 123 +++++ successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
app.get("/myproducts", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: 'Got My Products data ++++ successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});
//---------------------------------------------------------
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

/* npm start
http://localhost:5050/api/product

{"status":200,"message":"Got data successfully"}

E:\AI-Related\bear-express\bear-express>npm start

> bear-express@1.0.0 start
> node index.js

Server is running on PORT 5050

*/