const mongoose = require('mongoose');
const Note = require("../models/notes");

const createNote = async (req,res) =>{
    try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    if (!req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const newNote = await Note.create({
      userId: req.user._id,  // make sure user is attached by auth middleware
      content,
    });
    console.log(`Note created for user: ${req.user.email}, content: "${content}"`);
    res.status(201).json({ message: "Note created", note: newNote });

  } catch (err) {
    console.error("Create Note Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
} ;

const deleteNote = async (req, res) =>{
    try {
    const noteId = req.params.id;

    if (!mongoose.isValidObjectId(noteId)) {
      return res.status(400).json({ message: "Invalid note ID" });
    }

    const note = await Note.findOne({
      _id: noteId,
      userId: req.user._id,
    });

    if (!note) {
      return res.status(404).json({ message: "Note not found or not authorized" });
    }

    await note.deleteOne(); 

    console.log(`Deleted note: ${noteId} by user ${req.user.email}`);
    return res.status(200).json({ message: "Note deleted", noteId });

  } catch (err) {
    console.error("Delete Note Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {createNote , deleteNote} ;