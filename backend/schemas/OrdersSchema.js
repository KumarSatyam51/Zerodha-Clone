const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price:  Number,
    model: String,
    

});

module.exports = OrdersSchema;