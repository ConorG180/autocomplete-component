import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders Autocomplete component", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
});

test("renders Suggestions component when typed and matches query", () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "Band" } });

    const suggestionElement = getByText("Band 1");
    expect(suggestionElement).toBeInTheDocument();
});

test("Does not render Suggestions component when typedquery is not matching", () => {
    const { getByPlaceholderText, queryByText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: "Does not exist" } });

    const suggestionElement = queryByText("Band 1");
    expect(suggestionElement).not.toBeInTheDocument();
});
