import { StyleSheet, Text, View } from 'react-native';
import FoodListItem from '../components/foodListItem';

export default function App() 
{
  return (
    <View style={styles.container}>
      {/* Food item view, or cointainer */}
      <FoodListItem item={{ label: 'Pozole', cal: 789, brand: 'La Casa de Toño'}}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    gap: 5
  },
});
