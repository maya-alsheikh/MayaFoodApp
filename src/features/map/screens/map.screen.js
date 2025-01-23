import React , {useContext , useEffect , useState}from 'react';
import MapView from 'react-native-maps';
import { Searchbar } from 'react-native-paper';



export const MapScreen = () => {
    return(
        
       <>
       <Searchbar placeholder='search for a location ' style={{margin:3 , borderWidth:3 , borderColor:'orange'}}/>
        <MapView style={{height:'100%' , width:'100%'}}/>
       </>
    );
}