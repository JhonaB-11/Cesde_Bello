import express from 'express';
import controller from '../Controllers/ProjectController'

const router = express.Router();

router.get('/listquote', controller.listQuote);
router.get('/getquote', controller.getQuote);
router.post('/addquote', controller.addQuote);
router.post('/deletequote/', controller.deleteQuote);
router.post('/updatequote', controller.updateQuote);
//router.get('/data', controller.data);

module.exports = router;