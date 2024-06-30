import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockData = [
    { name: "Band 1" },
    { name: "Band 2" },
    { name: "Band 3" }
];

test("renders Autocomplete component", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
});

test("renders Suggestions component when typed and matches query", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const { getByPlaceholderText, getByText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "Band" } });

    await waitFor(() => {
        const suggestionElement = getByText("Band 1");
        expect(suggestionElement).toBeInTheDocument();
    });
});

test("Does not render Suggestions component when typed query is not matching", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] });

    const { getByPlaceholderText, queryByText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search...");

    fireEvent.change(inputElement, { target: { value: "Does not exist" } });

    await waitFor(() => {
        const suggestionElement = queryByText("Band 1");
        expect(suggestionElement).not.toBeInTheDocument();
    });
});
