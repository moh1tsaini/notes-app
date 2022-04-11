import React from "react";
import { BsLightbulbFill } from "react-icons/bs";

const EmptyScreen = () => {
    return (
        <div className="empty-state">
            <div className="empty-state-icon">
                <BsLightbulbFill />
            </div>
            <p>Notes you add appear here.</p>
        </div>
    );
};

export default EmptyScreen;
