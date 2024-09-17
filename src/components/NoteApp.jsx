// import React from 'react';
// import NoteList from './NoteList';
// import { getData } from '../utils/data';
// import NoteInput from './NoteInput';

// class NoteApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       notes: getData(),
//       searchQuery: '',
//     };

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
//     this.onArchiveHandler = this.onArchiveHandler.bind(this); // handler untuk arsip
//     this.onSearchHandler = this.onSearchHandler.bind(this);
//   }

//   onAddNoteHandler({ title, body }) {
//     this.setState((prevState) => {
//       return {
//         notes: [
//           ...prevState.notes,
//           {
//             id: +new Date(),
//             title,
//             body,
//             createdAt: new Date().toISOString(),
//             archived: false,
//           },
//         ],
//       };
//     });
//   }
  
//   onDeleteHandler(id) {
//     const notes = this.state.notes.filter(note => note.id !== id);
//     this.setState({ notes });
//   }

//   onArchiveHandler(id) {
//     const notes = this.state.notes.map(note => {
//       if (note.id === id) {
//         return { ...note, archived: !note.archived };
//       }
//       return note;
//     });
//     this.setState({ notes });
//   }

//   onSearchHandler(event) {
//     this.setState({ searchQuery: event.target.value });
//   }

//   render() {
//     const filteredNotes = this.state.notes.filter(note =>
//       note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
//     );
    
//     const activeNotes = filteredNotes.filter(note => !note.archived);
//     const archivedNotes = filteredNotes.filter(note => note.archived);

//     return (
//       <div className="note-app">
//         <h1>Aplikasi Catatan</h1>
//         <input 
//           type="text" 
//           placeholder="Cari catatan..." 
//           value={this.state.searchQuery} 
//           onChange={this.onSearchHandler} 
//         />

//         <NoteInput addNote={this.onAddNoteHandler} />
        
//         <h2>Catatan Aktif</h2>
//         <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />

//         <h2>Catatan Arsip</h2>
//         <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
//       </div>
//     );
//   }
// }

// export default NoteApp;




import React from 'react';
import NoteList from './NoteList';
import { getData } from '../utils/data';
import NoteInput from './NoteInput';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      searchQuery: '',
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map(note => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes });
  }

  onSearchHandler(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const filteredNotes = this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    const activeNotes = filteredNotes.filter(note => !note.archived);
    const archivedNotes = filteredNotes.filter(note => note.archived);

    return (
      <div className="note-app">
        <h1>Aplikasi Catatan</h1>
        <input 
          type="text" 
          placeholder="Cari catatan..." 
          value={this.state.searchQuery} 
          onChange={this.onSearchHandler} 
        />

        <NoteInput addNote={this.onAddNoteHandler} />

        <h2>Catatan Aktif</h2>
        <NoteList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />

        <h2>Catatan Arsip</h2>
        <NoteList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    );
  }
}

export default NoteApp;
