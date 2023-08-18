const controller = require('../controllers/payer.controller');
const router = require('express').Router();

// CRUD Routes /payers
const payerRoutes = () => {

    router.get('/', controller.getPayers);
    router.get('/:payerId', controller.getPayer);
    router.post('/', controller.createPayer);
    router.patch('/:payerId', controller.updatePayer);
    router.delete('/:payerId', controller.deletePayer);

    return router;
}


module.exports = payerRoutes;