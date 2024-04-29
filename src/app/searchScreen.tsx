import { StyleSheet, Text, View, FlatList, TextInput, Button, ActivityIndicator } from 'react-native';
import FoodListItem from '../components/foodListItem';
import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

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

// Here we define the lazy query, which will run the query when a function is triggered, in this case RunSearch
export default function SearchScreen() 
{

  const [search, setSearch] = useState('');
  const [ runSearch,{data, loading, error}] = useLazyQuery(query);
  const performSearch = () => {
    // We can render the variable ingr here, so instead defining it inside the query
    runSearch({ variables: {ingr: search}});
    // This removes the text from the seacrh container setSearch('');
  };

if (error){
  return <Text>Failed to search</Text>;
}

console.log(JSON.stringify(data, null, 2))

{/* Here we save in a variable the object where the info is stored. With ? we indicate that we will only access if there is data to initialize the function
    if not then it will send an empty array */}
const items = data?.search?.hints || [];

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
      {/* As we could see in the logs, the data is an object, and the FlatList spects an array, so we have to access to the array from that object
          Also, we call the function loading, and whenm it is true it will display an activity indicator */}
      {loading && <ActivityIndicator/>}
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodListItem item={item}/>}
        ListEmptyComponent={() => <Text>Search a food</Text>}
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
