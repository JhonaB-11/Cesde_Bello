'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ProjectController = require('../Controllers/ProjectController');

var _ProjectController2 = _interopRequireDefault(_ProjectController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/listquote', _ProjectController2.default.listQuote);
router.get('/getquote', _ProjectController2.default.getQuote);
router.post('/addquote', _ProjectController2.default.addQuote);
router.post('/deletequote/', _ProjectController2.default.deleteQuote);
router.post('/updatequote', _ProjectController2.default.updateQuote);
//router.get('/data', controller.data);

module.exports = router;