import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Suggestions.css";
import { Artist, Album, Song } from "./types";

type Suggestion = Artist | Album | Song;

type SuggestionsProps = {
    suggestions: Suggestion[];
    loading: boolean
};

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, loading }) => {

    return (
        // In reality, it"s crucial to use an ID or other unique identifier rather than index for key when using map
        //For demo purposes, index was chosen
        <div className="suggestions-container">
            {loading ? (
                <div className="loading">
                    <FontAwesomeIcon icon={faSpinner} size="xl" spin />
                </div>
            ) : suggestions.length === 0 ? (
                <div className="no-results">No results found</div>
            ) : (
                <ul data-testid="suggestions-list" className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                        <li key={index} className="suggestion-item">
                            <FontAwesomeIcon icon={faSearch} className="icon" />
                            {"name" in suggestion ? suggestion.name : suggestion.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Suggestions;