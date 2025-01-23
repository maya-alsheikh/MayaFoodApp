import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navi } from "./src/infrastructure/navigation";


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>

     <RestaurantsContextProvider>
     <Navi />
     </RestaurantsContextProvider>
     <ExpoStatusBar style="auto" />
    
    </>
  );
}

