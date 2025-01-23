import React , {useContext}from 'react';
import { StatusBar, StyleSheet, SafeAreaView, Text, View ,FlatList, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { Searchbar } from "react-native-paper";



export const RestaurantsScreen = ( {navigation} ) => {
  const {isLoading , error , restaurants} = useContext(RestaurantsContext);
  return(
    <>
    <SafeAreaView style={styles.container}>

    <View style={{paddingBottom:10}}>
      <Searchbar
        placeholder="Search for a location"
        
      />
    </View>
    
       <View style={styles.list}>
           <FlatList 
            data={restaurants}         
           renderItem={({item}) => { return ( 
           
           <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail' , {restaurant : item}) }>
            <RestaurantInfoCard restaurant={item}/> 
           </TouchableOpacity>
          
          )} }
           keyExtractor={(item) => item.name }
           contentContainerStyle={{padding:5}}
          
           />
         
       </View>
     </SafeAreaView>
    </>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },

    list: {
      flex: 1,
      padding: 12,
      backgroundColor: "#FA8C19",
    },
  });