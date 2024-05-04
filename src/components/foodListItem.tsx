import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'expo-router';



const mutation= gql`
mutation MyMutation ($food_id: String!, $kcal: Int!, $label: String!, $user_id: String!) {
  insertFood_log(food_id: $food_id, kcal: $kcal, label: $label, user_id: $user_id) {
    created_at
    food_id
    id
    kcal
    label
    user_id
  }
}
`;

{/* Now that we have the array we just simple access to the objects (everything inside Hints) */}
const FoodListItem = ({ item }) => 
    {
      const [logFood, {data, loading, error}]= useMutation(mutation, {refetchQueries: ['food_logByDateQ']});
      const router = useRouter();
      const onPlusPressed = async() => {
        await logFood ({variables: 
          {
            food_id: item.food.foodId,
            kcal: item.food.nutrients.ENERC_KCAL,
            label: item.food.label,
            user_id: "Raul"
          },
        });
        router.back();

      };

      return (
        <View style={styles.container}>
          <View style={styles.foodContainer}>
            <Text style={styles.foodItem}>{item.food.label}</Text>
            <Text style={styles.foodProperties}>{item.food.nutrients.ENERC_KCAL} Cal, {item.food.brand}</Text>
          </View> 
          <MaterialCommunityIcons onPress = {onPlusPressed} name="cookie-plus" size={24} color="royalblue" />
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