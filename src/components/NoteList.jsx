import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, title }) {
  return (
    <div className="note-list__section">
      <h2 className="note-list__title">{title}</h2>
      <div className="note-list">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            {...note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </div>
    </div>
  );
}

export default NoteList;
