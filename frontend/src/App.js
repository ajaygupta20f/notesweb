import React, { useState, useEffect } from 'react';
import { fetchNotes, addNote, deleteNote } from './services/noteService';
import NoteList from './components/NoteList';
import { Toaster } from 'react-hot-toast';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    fetchNotes()
      .then(setNotes)
      .catch((error) => {
        console.error('Error fetching notes:', error);
      });
  }, []);

  const handleAddNote = async () => {
    try {
      await addNote({ title: newNote, description: newDescription });
      const updatedNotes = await fetchNotes();
      setNotes(updatedNotes); // Refresh state
      setNewNote('');
      setNewDescription('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleDeleteNote = (id) => {
    if (id) {
      deleteNote(id)
        .then(() => {
          setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        })
        .catch((error) => {
          console.error('Error deleting note:', error);
        });
    } else {
      console.error('Invalid note ID');
    }
  };

  return (
    <div className="min-h-screen bg-teal-400 flex flex-col items-center">
      <Toaster/>
      <div className="text-4xl font-semibold text-left mb-8 text-white bg-black w-full ">
       <h1 className="text-4xl font-semibold text-left mb-8 text-white bg-black w-full p-3 ">☰ Notes</h1></div>
      <div className="w-full max-w-7xl p-4">
       
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg mb-8">
          <input
            type="text"
            placeholder="Title"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="w-full p-3 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddNote}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Note
          </button>
        </div>
        <div className="flex-grow">
          <NoteList notes={notes} onDelete={handleDeleteNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
