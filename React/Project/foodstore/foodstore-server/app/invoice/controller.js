const Invoice = require('./model');
const { policyFor } = require('../policy');
const { subject } = require('@casl/ability');

async function show(req, res, next) {
    try {
        let order_id = req.params["id"];

        let invoice = await Invoice
            .findOne({order: order_id})
            .populate('order')
            .populate('user');


        let policy = policyFor(req.user);
        let subjectInvoice = subject('Invoice', { ...invoice, user_id: invoice.user._id });

        if (!policy.can('read', subjectInvoice)) {
            return res.json({
                error: 1,
                message: "You're not allowed to perform this action"
            });
        }

        return res.json(invoice);
        
    } catch (err) {
        
        console.log('Error Invoice: '+err)
        return res.json({
            error: 1,
            message: err
        });
    }
}

module.exports = {
    show,
}