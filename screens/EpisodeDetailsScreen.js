// src/screens/EpisodeDetailsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchEpisodeDetails, fetchCharacterDetails } from '../services/api';

const EpisodeDetailsScreen = ({ route }) => {
    const { episodeId } = route.params;
    const [episode, setEpisode] = useState(null);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const getEpisodeDetails = async () => {
            const response = await fetchEpisodeDetails(episodeId);
            setEpisode(response.data);
            const characterResponses = await Promise.all(
                response.data.characters.map((url) => {
                    const id = url.split('/').pop();
                    return fetchCharacterDetails(id);
                })
            );
            setCharacters(characterResponses.map((res) => res.data));
        };
        getEpisodeDetails();
    }, [episodeId]);

    const renderCharacter = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    );

    return (
        <View>
            {episode ? (
                <View>
                    <Text>{episode.name}</Text>
                    <Text>{episode.air_date}</Text>
                    <FlatList
                        data={characters}
                        renderItem={renderCharacter}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default EpisodeDetailsScreen;
