const Payer = require('../models/payer.model');

// CRUD Controllers

//get all payers
exports.getPayers = (req, res, next) => {
    Payer.findAll({
        include: 'payerType'
    })
        .then(payers => {
            res.status(200).json({ payers: payers });
        })
        .catch(err => console.log(err));
}

//get payer by id
exports.getPayer = (req, res, next) => {
    const payerId = req.params.payerId;
    Payer.findByPk(payerId, {
        include: 'payerType'
    })
        .then(payer => {
            if (!payer) {
                return res.status(404).json({ message: 'payer not found!' });
            }
            res.status(200).json({ payer: payer });
        })
        .catch(err => console.log(err));
}

//create payer
exports.createPayer = (req, res, next) => {
    const code = req.body.code;
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const status = req.body.status;
    const payerTypeId = req.body.payerTypeId;
    Payer.create({
        code: code,
        name: name,
        email: email,
        phone: phone,
        status: status,
        payerTypeId: payerTypeId
    })
        .then(result => {
            console.log('Created Payer');
            res.status(201).json({
                message: 'Payer created successfully!',
                payer: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}

//update payer
exports.updatePayer = (req, res, next) => {
    const payerId = req.params.payerId;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    const updatedPhone = req.body.phone;
    const updatedStatus = req.body.status;
    Payer.findByPk(payerId)
        .then(payer => {
            if (!payer) {
                return res.status(404).json({ message: 'Payer not found!' });
            }
            payer.name = updatedName;
            payer.email = updatedEmail;
            payer.phone = updatedPhone;
            payer.status = updatedStatus;
            return payer.save();
        })
        .then(result => {
            res.status(200).json({ message: 'Payer updated!', payer: result });
        })
        .catch(err => console.log(err));
}

//delete payer
exports.deletePayer = (req, res, next) => {
    const payerId = req.params.payerId;
    Payer.findByPk(payerId)
        .then(payer => {
            if (!payer) {
                return res.status(404).json({ message: 'Payer not found!' });
            }
            return Payer.destroy({
                where: {
                    id: payerId
                }
            });
        })
        .then(result => {
            res.status(200).json({ message: 'Payer deleted!' });
        })
        .catch(err => console.log(err));
}