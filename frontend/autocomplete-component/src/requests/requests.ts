import axios from "axios";

const BASE_URL = "http://localhost:8000";

export const getSuggestions = async (query: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/search?query=${query}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};