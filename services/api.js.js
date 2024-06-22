import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export const getEpisodes = async (page = 1) => {
    try {
        const response = await axios.get(`${API_URL}/episode?page=${page}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching episodes:', error);
        throw error;
    }
};

export const getEpisodeDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/episode/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching episode details:', error);
        throw error;
    }
};

export const getCharacterDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/character/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching character details:', error);
        throw error;
    }
};
