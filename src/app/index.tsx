import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';
import FoodListItem from '../components/foodListItem';
import { useState } from 'react';


const foodItems = [
  { label: 'Pozole', cal: 789, brand: 'La Casa de Toño'},
  { label: 'Huarache', cal: 690, brand: 'Mercado La Prohogar'},
  { label: 'Alitas', cal: 500, brand: 'Las Miches'}
];

export default function App() 
{

  const [search, setSearch] = useState('');
  const performSearch = () => {
    console.warn('Searching for: ', search)
    setSearch('');
  }
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
