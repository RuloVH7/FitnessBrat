import { View, Text, StyleSheet } from 'react-native';

{/* Now that we have the array we just simple access to the objects (everything inside Hints) */}
const FoodLogListItem = ({ item }) => 
    {
      return (
        <View style={styles.container}>
          <View style={styles.foodContainer}>
            <Text style={styles.foodItem}>{item.label}</Text>
            <Text style={styles.foodProperties}>{item.kcal} Cal </Text>
          </View> 
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

export default FoodLogListItem;