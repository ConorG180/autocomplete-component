import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders Autocomplete component", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
});