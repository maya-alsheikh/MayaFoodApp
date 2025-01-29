import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingScreen } from "../../features/settings/SettingScreen";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
    return(
        <NavigationContainer >
          <Tab.Navigator 
        
         screenOptions={({ route }) => ({
           tabBarIcon: ({ color, size }) => {
             let iconName;
   
             if (route.name === "Restaurants") {
               iconName = "restaurant-sharp";
             } else if (route.name === "Settings") {
               iconName = "settings";
             } else if (route.name === "Map") {
               iconName = "map-sharp";
             }
   
         
             return <Ionicons name={iconName} size={size} color={color} />;
           },
           headerStyle:{backgroundColor:'#FA8C19',}
         })}
         tabBarOptions={{
           activeTintColor: "tomato",
           inactiveTintColor: "gray",
           
            
         }}
         >
           <Tab.Screen  name='Restaurants' component={RestaurantsNavigator} />
           <Tab.Screen name='Settings' component={SettingScreen}/>
           <Tab.Screen name='Map' component={MapScreen}/>
         </Tab.Navigator>
                     </NavigationContainer>
    )
}