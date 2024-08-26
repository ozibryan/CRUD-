const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
});


mongoose.connect('mongodb+srv://ozibryan359:1Qc9ZhMqx0VQHYgk@background.n2exn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Background')
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(() => {
        console.log('Connestion Failed');

    });

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
