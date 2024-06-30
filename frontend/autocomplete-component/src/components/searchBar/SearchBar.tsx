import React, { useEffect, useState } from "react";
import Suggestions from "../suggestions/Suggestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getSuggestions } from "../../requests/requests";
import "./SearchBar.css";
import useDebounce from "../../hooks/useDebounce";

const searchBar: React.FC = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([])
    const debouncedQuery = useDebounce(query, 300);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query) {
                try {
                    const suggestions = await getSuggestions(query);
                    setSuggestions(suggestions);
                } catch (error) {
                    console.error(error);
                }
            } else {
                setSuggestions([]);
            }
        };

        fetchSuggestions();
    }, [debouncedQuery]);

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
            {query && <Suggestions suggestions={suggestions} />}
        </div>
    );
};

export default searchBar;
