const express = require('express');
const noteController = require('../controllers/noteController');
const router = express.Router();

router.get('/', noteController.getNotes);
router.post('/', noteController.addNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
