import React, { useState } from "react";
import Suggestions from "../suggestions/Suggestions";
import "./SearchBar.css";

const searchBar: React.FC = () => {
    const [query, setQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <h1>Search for your favourite artists, albums and songs!</h1>
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
            />
            {query && <Suggestions query={query} />}
        </div>
    );
};

export default searchBar;
