import { useEffect, useState } from 'react';
import axios from 'axios';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/notes/user', {
        withCredentials: true,
      });
      setNotes(res.data);
    } catch (err) {
      console.error('Error fetching notes', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (noteId) => {
    try {
      await axios.delete(`http://localhost:3000/api/notes/${noteId}`, {
        withCredentials: true,
      });
      setNotes((prev) => prev.filter((note) => note._id !== noteId));
    } catch (err) {
      console.error('Error deleting note', err);
      alert('Failed to delete note');
    }
  };

  return (
    <div className="mt-4 space-y-4">
      {notes.length === 0 ? (
        <p className="text-center text-gray-500">No notes found.</p>
      ) : (
        notes.map((note) => (
          <div
            key={note._id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded shadow-sm"
          >
            <span>{note.content}</span>
            <button
              onClick={() => handleDelete(note._id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
