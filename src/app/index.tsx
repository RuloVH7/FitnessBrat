import { StyleSheet, Text, View, FlatList } from 'react-native';
import FoodListItem from '../components/foodListItem';


const foodItems = [
  { label: 'Pozole', cal: 789, brand: 'La Casa de Toño'},
  { label: 'Huarache', cal: 690, brand: 'Mercado La Prohogar'},
  { label: 'Alitas', cal: 500, brand: 'Las Miches'}
];

export default function App() 
{
  return (
    <View style={styles.container}>
      {/* Food item view, or cointainer */}
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
  },
});
