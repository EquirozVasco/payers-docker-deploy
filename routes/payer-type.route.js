const controller = require('../controllers/payer-type.controller');
const router = require('express').Router();

// CRUD Routes /payers
const payerTypeRoutes = () => {

    router.get('/', controller.getPayerTypes);
    router.get('/:payerTypeId', controller.getPayerType);
    router.post('/', controller.createPayerType);
    router.patch('/:payerTypeId', controller.updatePayerType);
    router.delete('/:payerTypeId', controller.deletePayerType);

    return router;
}


module.exports = payerTypeRoutes;