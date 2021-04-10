const { Router } = require('express');
const router = Router();
const transactionController = require('../controllers/transactionsController');

router.get('/', transactionController.getRouter);
router.post('/', transactionController.postRouter);

module.exports = router;
