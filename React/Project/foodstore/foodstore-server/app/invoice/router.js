const router = require('express').Router();

const invoiceController = require('./controller');

router.get('/invoices/:id', invoiceController.show);

module.exports = router;