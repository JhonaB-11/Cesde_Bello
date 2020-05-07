"use strict";

var _ProjectModel = require("../Models/ProjectModel");

var _ProjectModel2 = _interopRequireDefault(_ProjectModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
    addQuote: async function addQuote(req, res) {
        var _req$body = req.body,
            id = _req$body.id,
            name = _req$body.name,
            lastname = _req$body.lastname,
            address = _req$body.address,
            datebirth = _req$body.datebirth,
            city = _req$body.city,
            neighborhood = _req$body.neighborhood,
            phonenumber = _req$body.phonenumber,
            date = _req$body.date;

        var newQuote = new _ProjectModel2.default({ id: id, name: name, lastname: lastname, address: address, datebirth: datebirth, city: city, neighborhood: neighborhood, phonenumber: phonenumber, date: date });
        await newQuote.save();
        return res.status(200).json({
            response: "Quote added successfully"
        });
    },
    getQuote: async function getQuote(req, res) {
        var id = req.query.id;
        //console.log(name);
        var quote = await _ProjectModel2.default.findById({ _id: id });
        return res.status(200).json({ quote: quote });
    },
    listQuote: async function listQuote(req, res) {
        var quote = await _ProjectModel2.default.find({});
        return res.status(200).json({ quote: quote });
    },
    updateQuote: async function updateQuote(req, res) {
        var _req$body2 = req.body,
            id = _req$body2.id,
            name = _req$body2.name,
            lastname = _req$body2.lastname,
            address = _req$body2.address,
            datebirth = _req$body2.datebirth,
            city = _req$body2.city,
            neighborhood = _req$body2.neighborhood,
            phonenumber = _req$body2.phonenumber,
            date = _req$body2.date;

        await _ProjectModel2.default.findByIdAndUpdate(id, { id: id, name: name, lastname: lastname, address: address, datebirth: datebirth, city: city, neighborhood: neighborhood, phonenumber: phonenumber, date: date });
        return res.status(200).json({
            response: "Task updated successfully"
        });
    },
    deleteQuote: async function deleteQuote(req, res) {
        var id = req.body.id;

        await _ProjectModel2.default.findByIdAndDelete(id);
        return res.status(200).json({
            response: "Quote deleted successfully"
        });
    }
};

module.exports = controller;