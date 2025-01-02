import React from 'react';

const Note = ({ note, onDelete }) => {
  return (
  <div>
    <span>{note.title}</span>
    <button onClick={() => onDelete(note.id)}>Delete</button>
  </div>
);}

export default Note;
