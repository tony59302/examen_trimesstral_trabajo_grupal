const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/loansController');

router.post('/', ctrl.createLoan); // registrar préstamo
router.put('/:id/return', ctrl.returnLoan); // marcar devolución
router.get('/', ctrl.listLoans); // opcional: historial
module.exports = router;
