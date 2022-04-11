import React from "react";
import { BsTrashFill } from "react-icons/bs";

const Note = ({ id, title, body, date, handleDeleteNote }) => {
    return (
        <div className="note">
            <h2 className="note-title">{title}</h2>
            <div className="note-footer">
                <small className="note-date">{date}</small>
                <button
                    className="btn btn-delete-note"
                    onClick={() => handleDeleteNote(id)}
                >
                    <BsTrashFill />
                </button>
            </div>
        </div>
    );
};

export default Note;
