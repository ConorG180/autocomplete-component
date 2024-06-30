import React from "react";
import "./SearchBar.css";

const SearchBar: React.FC = () => {
    return (
        <div className="search-bar-container">
            <h1>Search for your favourite artists, albums and songs!</h1>
            <input type="text" className="search-input" placeholder="Search..." />
        </div>
    );
};

export default SearchBar;
