import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


{/* Now that we have the array we just simple access to the objects (everything inside Hints) */}
const FoodListItem = ({ item }) => 
    {
      return (
        <View style={styles.container}>
          <View style={styles.foodContainer}>
            <Text style={styles.foodItem}>{item.food.label}</Text>
            <Text style={styles.foodProperties}>{item.food.nutrients.ENERC_KCAL} Cal, {item.food.brand}</Text>
          </View> 
          <MaterialCommunityIcons name="cookie-plus" size={24} color="royalblue" />
        </View>
      );
    };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f8',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  foodContainer: {
    flex: 1, gap: 5
  },
  foodItem: {
    fontSize: 16, 
    fontWeight: 'bold'
  },
  foodProperties: {
    color: 'dimgray'
  }
})

export default FoodListItem;