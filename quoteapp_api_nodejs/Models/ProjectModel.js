import {Schema, model} from 'mongoose';
//const Schema = mongoose.Schema;
//const 
//const {Schema, model} = require('mongoose');

const QuoteSchema = new Schema({
    id: {type: Number},
    name: {type: String},
    lastname: {type: String},
    address: {type: String},
    datebirth: {type: String},
    city: {type: String},
    neighborhood: {type: String},
    phonenumber: {type: Number},
    date: {type: String},
});

module.exports = model("Quote",QuoteSchema);