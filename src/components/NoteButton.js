import React from "react";
import { BsPlus } from "react-icons/bs";

const NoteButton = ({ handleShowNote }) => {
    return (
        <button className="btn btn-add-note">
            <BsPlus className="btn-icon" onClick={() => handleShowNote(true)} />
        </button>
    );
};

export default NoteButton;
