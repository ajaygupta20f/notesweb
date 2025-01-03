import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = 'https://notesweb-xe78.onrender.com/api/notes';

// Fetch all notes
export const fetchNotes = async () => {
  try {
    const response = await axios.get(API_URL);
    // toast.success('Notes fetched successfully!');
    return response.data;
  } catch (error) {
    toast.error('Failed to fetch notes.');
    console.error('Error fetching notes:', error);
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
    toast.success('Note added successfully!');
    return response.data;
  } catch (error) {
    toast.error('Failed to add note.');
    console.error('Error adding note:', error.response?.data || error.message);
    throw error;
  }
};

// Delete a note by ID
export const deleteNote = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    toast.success('Note deleted successfully!');
  } catch (error) {
    toast.error('Failed to delete note.');
    console.error('Error deleting note:', error.response?.data || error.message);
    throw error;
  }
};
