const mongoose = require("mongoose");

const HoldingsSchema = new mongoose.Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price:  Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = HoldingsSchema;