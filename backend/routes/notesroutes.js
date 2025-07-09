const express = require ('express');
const { createNote, deleteNote } = require('../controllers/notescontroller');
const userAuth = require('../middleware/authmiddleware');

const router = express.Router();
router.post('/create',  userAuth,createNote);
router.delete('/:id',userAuth, deleteNote);

module.exports=router;