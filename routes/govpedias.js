const express = require('express');
const {
  getGovpedias,
  getGovpedia,
} = require('../controllers/govpedias');
const router = express.Router();
router.route('/').get(getGovpedias);
router
  .route('/:id')
  .get(getGovpedia)
module.exports = router;