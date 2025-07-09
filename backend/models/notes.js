const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: [true, 'User ID is required']  
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    
    minlength: [1, 'Content cannot be empty']
  },
  createdAt: { 
    type: Date, 
    default: Date.now,
    immutable: true  
  }
});

module.exports = mongoose.model('Note', noteSchema);