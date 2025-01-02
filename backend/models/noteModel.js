const db = require('../db/connection');

class Note {
  // Fetch all notes
  static fetchAll(callback) {
    db.query('SELECT * FROM notes', (err, results) => {
      if (err) {
        console.error('Error fetching notes:', err);
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  // Add a new note with title, description, and current timestamp
  static add(title, description, callback) {
    // Using NOW() to get the current timestamp directly from MySQL
    const query = 'INSERT INTO notes (title, description, dateAndTime) VALUES (?, ?, NOW())';
    db.query(query, [title, description], (err, result) => {
      if (err) {
        console.error('Error adding note:', err);
        return callback(err, null);
      }
      callback(null, { id: result.insertId, title, description, dateAndTime: new Date().toISOString() });
    });
  }

  // Delete a note by its ID
  static delete(id, callback) {
    const query = 'DELETE FROM notes WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) {
        console.error('Error deleting note:', err);
        return callback(err, null);
      }
      if (result.affectedRows === 0) {
        return callback(new Error('Note not found'), null);
      }
      callback(null, { message: 'Note deleted successfully' });
    });
  }
}

module.exports = Note;
