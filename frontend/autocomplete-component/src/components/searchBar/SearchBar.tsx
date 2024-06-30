import React, { useState } from "react";
import Suggestions from "../suggestions/Suggestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const searchBar: React.FC = () => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        console.log(query);
    };

    return (
        <div className="search-bar-container">
            <h1>Search for your favourite artists, albums and songs!</h1>
            <div className="search-input-wrapper">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                />
                <button className="search-button" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} size="xl" />
                </button>
            </div>
            {query && <Suggestions query={query} />}
        </div>
    );
};

export default searchBar;
