import React, { useEffect, useState } from "react";
import NotesService from "../services/NotesService";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  const retrieveNotes = () => {
    NotesService.getAll()
      .then((response) => {
        console.log("getting the response", response.data);
        setNotes(response.data);
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  useEffect(() => {
    retrieveNotes();
  }, []);

  return (
    <div>
      <h1>List of Notes</h1>
      {notes &&
        notes.map((note) => (
          <div key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </div>
        ))}
    </div>
  );
};

export default NotesList;
