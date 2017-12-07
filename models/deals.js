var mongoose = require('mongoose');

var DealSchema = new mongoose.Schema({
    paymenttype: String,
    amount: Number,
    upvotes: {type: Number, default: 0},
    info: String
});

module.exports = mongoose.model('Deal', DealSchema);