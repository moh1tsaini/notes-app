import React, { useState } from "react";
import { BsSearch, BsToggle2Off, BsToggle2On } from "react-icons/bs";

const Header = ({ handleSearchNote, handleDarkMode }) => {
    const [toggleSearch, setToggleSearch] = useState(false);
    return (
        <nav className={toggleSearch ? "nav show" : "nav"}>
            <div>
                <h1 className="nav-logo">Notes</h1>
            </div>

            <div className="nav-btns">
                <button
                    className="btn btn-theme"
                    onClick={() =>
                        handleDarkMode((previousDarkMode) => !previousDarkMode)
                    }
                >
                    <BsToggle2Off className="toggle-off" />
                    <BsToggle2On className="toggle-on" />
                </button>

                <div className="nav-search-box">
                    <BsSearch
                        onClick={() =>
                            setToggleSearch(
                                (prevToggleSearch) => !prevToggleSearch
                            )
                        }
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(event) =>
                            handleSearchNote(event.target.value)
                        }
                    />
                </div>
            </div>
        </nav>
    );
};

export default Header;
