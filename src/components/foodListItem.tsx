import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const FoodListItem = ({ item }) => 
    {
      return (
        <View style={{ 
          backgroundColor: 'gainsboro',
          padding: 10,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'}}>
          <View style={{ flex: 1, gap: 5}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold'}}>{item.label}</Text>
            <Text style={{ color: 'dimgray'}}>{item.cal}, {item.brand}</Text>
          </View> 
          <MaterialCommunityIcons name="cookie-plus" size={24} color="royalblue" />
        </View>
      );
    };

    export default FoodListItem;