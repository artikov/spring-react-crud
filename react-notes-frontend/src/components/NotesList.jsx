import React, { useEffect, useState } from "react";
import NotesService from "../services/NotesService";
import { Link } from "react-router-dom";

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
    <div className="main-content">
      <h4>List of Notes</h4>
      <div className="notes-list mt-4">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div key={note.id} className="notes-preview mt-3">
              <Link to="#">
                <h5 className="primary-color text-capitalize">{note.title}</h5>
                <p>{note.body}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No notes found</p>
        )}
      </div>
    </div>
  );
};

export default NotesList;
