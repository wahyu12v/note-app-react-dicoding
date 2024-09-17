// import React from 'react';
// import NoteItemBody from './NoteItemBody';
// import DeleteButton from './DeleteButton';

// function NoteItem({ title, body, id, archived, onDelete, onArchive }) {
//   return (
//     <div className="note-item">
//       <NoteItemBody title={title} body={body} />
//       <div className="note-item__actions">
//         <button onClick={() => onArchive(id)}>
//           {archived ? 'Pindahkan' : 'Arsipkan'}
//         </button>
//         <DeleteButton id={id} onDelete={onDelete} />
//       </div>
//     </div>
//   );
// }

// export default NoteItem;




import React from 'react';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';

function NoteItem({ title, body, id, createdAt, archived, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
      <div className="note-item__actions">
        <button onClick={() => onArchive(id)}>
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
