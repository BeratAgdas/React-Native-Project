// src/screens/HomeScreen.js
import React, { useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodes } from '../redux/slices/episodeSlice';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { episodes, status } = useSelector((state) => state.episodes);

    useEffect(() => {
        dispatch(getEpisodes());
    }, [dispatch]);

    const renderEpisode = ({ item }) => (
        <View>
            <Text>{item.name}</Text>
            <Button
                title="View Details"
                onPress={() => navigation.navigate('EpisodeDetails', { episodeId: item.id })}
            />
        </View>
    );

    return (
        <View>
            {status === 'loading' ? (
                <Text>Loading...</Text>
            ) : (
                <FlatList
                    data={episodes}
                    renderItem={renderEpisode}
                    keyExtractor={(item) => item.id.toString()}
                />
            )}
        </View>
    );
};

export default HomeScreen;
