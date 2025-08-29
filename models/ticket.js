const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/createuser");

const ticketschema = new mongoose.Schema({
    ticketid: {
        type: String,
        required: true
    },
    totalprice: {
        type: Number,
        required: true
    },
    purchase_date: {
        type: String,
        required: true
    },
    createrid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Ticket", ticketschema);
