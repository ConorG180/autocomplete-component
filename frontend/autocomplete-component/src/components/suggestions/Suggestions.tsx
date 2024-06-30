import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Suggestions.css";
import { Artist, Album, Song } from "./types";

type Suggestion = Artist | Album | Song;

type SuggestionsProps = {
    suggestions: Suggestion[];
};

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => {

    return (
        // In reality, we should use a unique identifier rather than index for key when using map
        //For demo purposes, index was chosen
        <div className="suggestions-container">
            <ul data-testid="suggestions-list" className="suggestions-list">
                {suggestions.map((suggestion, index) => (
                    <li key={index} className="suggestion-item">
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                        {"name" in suggestion ? suggestion.name : suggestion.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Suggestions;