import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator} from "react-native";
import { Link } from "expo-router";
import FoodListItem from "../components/foodListItem";
import { gql, useQuery } from "@apollo/client";
import dayjs from "dayjs";

const query = gql`
query MyQuery($date: Date!, $user_id: String!) {
  food_logByDate(date: $date, user_id: $user_id) {
    created_at
    label
    food_id
    id
    kcal
  }
}
`;


const foodItems = [
    {
        food: { label: 'Pozole', nutrients: {ENERC_KCAL: 100}, brand: 'La Casa de Toño'},
    },
    {
        food: { label: 'Pizza', nutrients: {ENERC_KCAL: 200}, brand: 'Little Caesars'},
    },
    {
        food: { label: 'Tuna', nutrients: {ENERC_KCAL: 830}, brand: 'Tuny'},
    },
  ];
export default function HomeScreen() {

    const user_id = 'Raul';
    const {data, loading, error} = useQuery(query, {
        variables: {
            date: dayjs().format('YYYY-MM-DD'),
            user_id,
        }
    })

    if (loading){
        return <ActivityIndicator />
    }

    if (error){
        <Text>Failed to fetch data</Text>
    }

    console.log(dayjs().format('YYYY-MM-DD'))
    console.log(data);
    return (
        <View style={ styles.container }>
            <View style={ styles.header }>
                <Text style={ styles.title }>Calories</Text>
                <Text>1700 - 343 = 38</Text>
            </View>

            <View style={ styles.header }>
                <Text style={ styles.title }>Today's Log Food</Text>
                <Link href="/searchScreen" asChild>
                    <Button title="ADD FOOD" />
                </Link>
            </View>

            <FlatList
                data={foodItems}
                contentContainerStyle={{gap: 5}}
                renderItem={({item}) => <FoodListItem item={item} />}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        flex: 1, 
        padding: 10, 
        gap: 10,
    },
    header : {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16, 
        fontWeight: '500', 
        flex: 1, 
        color: 'dimgray'
    }
})