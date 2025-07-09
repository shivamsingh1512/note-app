import { useState } from "react";
import axios from "axios";

const CreateNote = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/notes/create", { content }, {
        withCredentials: true,
      });

      if (res.status === 201) {
        alert("Note created");
        setContent('');
      } else {
        alert("Unexpected response");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to create note");
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Write your note here..."
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Note
      </button>
    </div>
  );
};

export default CreateNote;
