import axios from 'axios';

const API_URL = 'https://notesweb-bice.vercel.app/api/notes';

// Fetch all notes
export const fetchNotes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching notes:', error.response?.data || error.message);
    throw error;
  }
};

// Add a new note
export const addNote = async ({ title, description }) => {
  try {
    const response = await axios.post(API_URL, { title, description }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding note:', error.response?.data || error.message);
    throw error;
  }
};

// Delete a note by ID
export const deleteNote = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting note:', error.response?.data || error.message);
    throw error;
  }
};
