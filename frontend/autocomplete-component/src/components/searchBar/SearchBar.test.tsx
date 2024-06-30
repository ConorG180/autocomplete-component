import { render } from "@testing-library/react";

test("renders Autocomplete component", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();
});