import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavoriteCharacter } from '../redux/actions';

const FavoriteCharacters = () => {
  const favoriteCharacters = useSelector(state => state.favoriteCharacters);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Button title="Remove" onPress={() => dispatch(removeFavoriteCharacter(item.id))} />
    </View>
  );

  return (
    <FlatList
      data={favoriteCharacters}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default FavoriteCharacters;
