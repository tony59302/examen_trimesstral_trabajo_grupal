const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/materialsController');

router.get('/', ctrl.listMaterials);
router.post('/', ctrl.createMaterial);

module.exports = router;
