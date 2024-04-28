import { StyleSheet, Text, View, FlatList, TextInput, Button, ActivityIndicator } from 'react-native';
import FoodListItem from '../components/foodListItem';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const query = gql`
query myQuery($ingr: String) {
  search( ingr: $ingr) {
    text
    hints {
      food {
        label
        brand
        foodId
        nutrients {
          ENERC_KCAL
      }
    }
  }
}
}
`;

const foodItems = [
  { label: 'Pozole', cal: 789, brand: 'La Casa de Toño'},
  { label: 'Huarache', cal: 690, brand: 'Mercado La Prohogar'},
  { label: 'Alitas', cal: 500, brand: 'Las Miches'}
];

export default function SearchScreen() 
{

  const [search, setSearch] = useState('');
  const {data, loading, error} = useQuery(query, { variables: { ingr: 'Pizza' }});
  const performSearch = () => {
    console.warn('Searching for: ', search)
    setSearch('');
  };

if (loading){
  return <ActivityIndicator/>;
}

if (error){
  return <Text>Failed to search</Text>;
}

console.log(JSON.stringify(data, null, 2))

  return (
    <View style={styles.container}>
      {/* Food item view, or cointainer */}
      <TextInput 
        value={search} 
        onChangeText={setSearch} 
        placeholder="Search..." 
        style={styles.input}
      />
      {search && <Button title='Search' onPress={performSearch}/>}
      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item}/>}
        contentContainerStyle={{gap: 5}} 
      /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    gap: 10
  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
  }
});
