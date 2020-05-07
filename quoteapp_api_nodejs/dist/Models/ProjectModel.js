"use strict";

var _mongoose = require("mongoose");

//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

var QuoteSchema = new _mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    lastname: { type: String },
    address: { type: String },
    datebirth: { type: String },
    city: { type: String },
    neighborhood: { type: String },
    phonenumber: { type: Number },
    date: { type: String }
});

module.exports = (0, _mongoose.model)("Quote", QuoteSchema);