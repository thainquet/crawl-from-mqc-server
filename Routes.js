var express = require('express');
var router = express.Router();
var controller = require("./Controller")


router.get('/', controller.getAll);

router.get('/ads/:id', controller.getById)

router.post('/ads/new', controller.postNew)

router.put('/ads/update/:id', controller.updateOne)

router.delete('/ads/delete/:id', controller.deleteById)


module.exports = router;