var Deal = require("../models/deals");
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/dealsdb");

var db = mongoose.connection;

db.on("error", function (err) {
    console.log("connection error", err);
});
db.once("open", function () {
    console.log("connected to database");
});

router.findAll = function(req, res) {
    Deal.find(function(err, deals) {
        if (err)
            res.send(err);
        else
            res.json(deals);
    });
};

router.findOne = function(req, res) {
    Deal.find({ "_id" : req.params.id },function(err, deal) {
        if (err)
            res.json({ message: "Deal NOT Found!", errmsg : err } );
        else
            res.json(deal);
    });
};

router.addDeal = function(req, res) {

    var deal = new Deal();

    deal.paymenttype = req.body.paymenttype;
    deal.amount = req.body.amount;
    deal.info = req.body.info;

    console.log("Adding deal: " + JSON.stringify(deal));

    // Save the deal and check for errors
    deal.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: "Deal Added!", data: deal });
    });
};

router.deleteDeal = function(req, res) {

    Deal.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: "Deal Deleted!", data: Deal});
    });
};

router.incrementUpvotes = function(req, res) {

    Deal.findById(req.params.id, function(err,deal) {
        if (err)
            res.send(err);
        else {
            deal.upvotes += 1;
            deal.save(function (err) {
                if (err)
                    res.send(err);
                else
                    res.json({ message: "Invalid Deal Id!", data: deal });
            });
        }
    });
};

module.exports = router;