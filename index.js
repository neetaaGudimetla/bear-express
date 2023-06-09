const express = require('express');
const product = require('./api/product');
const app = express();
const PORT = process.env.PORT || 5050;
app.use("/api/product", product);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

/* npm start
http://localhost:5050/api/product

{"status":200,"message":"Got data successfully"}

E:\AI-Related\bear-express\bear-express>npm start

> bear-express@1.0.0 start
> node index.js

Server is running on PORT 5050

*/