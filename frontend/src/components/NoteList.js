import React from 'react';
import { MdDelete } from "react-icons/md";

function NoteList({ notes, onDelete }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 items-start">
      {notes.map((note) => (
        <div
          key={note.id}
          className="w-[300px] bg-white p-4 h-auto rounded-lg shadow-lg border border-gray-300 flex flex-col"
        >
          <div>
            <h2 className="text-lg font-bold mb-2">{note.title}</h2>
            <p className="text-gray-700 mb-4 break-words">{note.description}</p>
          </div>
          <div className="mt-auto flex justify-between items-end">
            <p className="text-gray-500 text-sm">{note.dateAndTime}</p>
            <button
              onClick={() => onDelete(note.id)}
              className="bg-red-400 text-white py-1 px-2 rounded hover:bg-red-700 transition duration-200"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
