import React, { useState } from "react";
import { BsX } from "react-icons/bs";

const AddNote = ({ showNote, handleAddNote, handleShowNote }) => {
    const [noteText, setNoteText] = useState("");

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
            handleShowNote(false);
        }
    };

    return (
        <div
            className={
                showNote ? "container-add-note show" : "container-add-note"
            }
        >
            <div className="box-btn-tools">
                <button
                    className="btn btn-back"
                    onClick={() => handleShowNote(false)}
                >
                    <BsX />
                </button>

                <button className="btn btn-save" onClick={handleSaveClick}>
                    Save
                </button>
            </div>

            <div className="add-note-title">
                <textarea
                    rows="4"
                    placeholder="Type to add note..."
                    value={noteText}
                    onChange={handleChange}
                ></textarea>
            </div>
        </div>
    );
};

export default AddNote;
