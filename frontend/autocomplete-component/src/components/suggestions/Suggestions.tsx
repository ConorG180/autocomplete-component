import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Suggestions.css";

type SuggestionsProps = {
    query: string;
}

const Suggestions: React.FC<SuggestionsProps> = ({ query }) => {
    const suggestions = ["Band 1", "Band 2", "Band 3"].filter(band =>
        band.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="suggestions-container">
            <ul data-testid="suggestions-list" className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="suggestion-item">
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                        {suggestion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Suggestions;