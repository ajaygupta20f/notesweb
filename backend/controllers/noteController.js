const Note = require('../models/noteModel');

exports.getNotes = (req, res) => {
  Note.fetchAll((err, results) => {
    if (err) res.status(500).json(err);
    else res.status(200).json(results);
  });
};

exports.addNote = (req, res) => {
    // console.log("rea",req.body);
  const { title, description } = req.body;
  Note.add(title, description, (err, result) => {
    if (err) res.status(500).json(err);
    else res.status(201).json({ id: result.insertId, title, description, dateAndTime: new Date().toISOString() });
  });
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;
  Note.delete(id, (err) => {
    if (err) res.status(500).json(err);
    else res.status(200).json({ message: 'Note deleted' });
  });
};
