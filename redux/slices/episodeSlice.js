// src/redux/slices/episodeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchEpisodes } from '../../services/api';

export const getEpisodes = createAsyncThunk('episodes/getEpisodes', async (page) => {
    const response = await fetchEpisodes(page);
    return response.data;
});

const episodeSlice = createSlice({
    name: 'episodes',
    initialState: {
        episodes: [],
        status: null,
    },
    extraReducers: {
        [getEpisodes.pending]: (state) => {
            state.status = 'loading';
        },
        [getEpisodes.fulfilled]: (state, action) => {
            state.episodes = action.payload.results;
            state.status = 'success';
        },
        [getEpisodes.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export default episodeSlice.reducer;
