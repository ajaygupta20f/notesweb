import axios from 'axios';

const API_URL = 'https://notesweb-bice.vercel.app/api/notes';

// Fetch all notes
export const fetchNotes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add a new note
export const addNote = async ({ title, description }) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    });
  
    if (!response.ok) {
      const error = await response.json();
      console.log("err",error)
      throw new Error(error.message || 'Failed to add note');
    }
  
    return response.json();
  };
  

// Delete a note by ID
export const deleteNote = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
