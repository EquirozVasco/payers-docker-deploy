const PayerType = require('../models/payer-type.model');

// CRUD Controllers

//get all payerTypes
exports.getPayerTypes = (req, res, next) => {
    PayerType.findAll()
        .then(payerTypes => {
            res.status(200).json({ payerTypes: payerTypes });
        })
        .catch(err => console.log(err));
}

//get payerType by id
exports.getPayerType = (req, res, next) => {
    const payerTypeId = req.params.payerTypeId;
    PayerType.findByPk(payerTypeId)
        .then(payerType => {
            if (!payerType) {
                return res.status(404).json({ message: 'payerType not found!' });
            }
            res.status(200).json({ payerType: payerType });
        })
        .catch(err => console.log(err));
}

//create payerType
exports.createPayerType = (req, res, next) => {
    const code = req.body.code;
    const name = req.body.name;
    const status = req.body.status;
    PayerType.create({
        code: code,
        name: name,
        status: status,
    })
        .then(result => {
            console.log('Created PayerType');
            res.status(201).json({
                message: 'PayerType created successfully!',
                payerType: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

//update payerType
exports.updatePayerType = (req, res, next) => {
    const payerTypeId = req.params.payerTypeId;
    const updatedName = req.body.name;
    const updatedStatus = req.body.status;
    PayerType.findByPk(payerTypeId)
        .then(payerType => {
            if (!payerType) {
                return res.status(404).json({ message: 'PayerType not found!' });
            }
            payerType.name = updatedName;
            payerType.status = updatedStatus;
            return payerType.save();
        })
        .then(result => {
            res.status(200).json({ message: 'PayerType updated!', payerType: result });
        })
        .catch(err => console.log(err));
}

//delete payerType
exports.deletePayerType = (req, res, next) => {
    const payerTypeId = req.params.payerTypeId;
    PayerType.findByPk(payerTypeId)
        .then(payerType => {
            if (!payerType) {
                return res.status(404).json({ message: 'PayerType not found!' });
            }
            return PayerType.destroy({
                where: {
                    id: payerTypeId
                }
            });
        })
        .then(result => {
            res.status(200).json({ message: 'PayerType deleted!' });
        })
        .catch(err => console.log(err));
}