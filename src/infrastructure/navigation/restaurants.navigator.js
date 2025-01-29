import React from 'react';
import { createStackNavigator ,TransitionPresets } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/RestaurantDetailScreen';


const RestaurantStack = createStackNavigator();


export const RestaurantsNavigator = () => {
    return(

        <RestaurantStack.Navigator 
        screenOptions={{
            headerMode:'false',
            ...TransitionPresets.BottomSheetAndroid,

        }}
        >
            <RestaurantStack.Screen 
            name="Restaurants"
            component={RestaurantsScreen}
            />

            <RestaurantStack.Screen 
            name='RestaurantDetail'
            component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}