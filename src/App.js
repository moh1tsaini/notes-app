import React, { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import NoteButton from "./components/NoteButton";
import NotesList from "./components/NotesList";
import EmptyScreen from "./components/EmptyScreen";
import AddNote from "./components/AddNote";

const App = () => {
    const [searchText, setSearchText] = useState("");
    const [showNote, setShowNote] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [notes, setNotes] = useState([]);

    const addNote = (text) => {
        const date = new Date().toDateString().slice(0, -4);
        const newNote = {
            id: nanoid(),
            title: text,
            date: date,
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className={darkMode ? "container dark-mode" : "container"}>
            <Header
                handleSearchNote={setSearchText}
                handleDarkMode={setDarkMode}
            />

            {notes.length > 0 ? (
                <NotesList
                    notes={notes.filter((note) =>
                        note.title.toLowerCase().includes(searchText)
                    )}
                    handleDeleteNote={deleteNote}
                />
            ) : (
                <EmptyScreen />
            )}

            <NoteButton handleShowNote={setShowNote} />
            <AddNote
                showNote={showNote}
                handleAddNote={addNote}
                handleShowNote={setShowNote}
            />
        </div>
    );
};

export default App;
