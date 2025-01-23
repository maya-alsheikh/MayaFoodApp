import React from 'react';
import {Text , StyleSheet , View ,Image} from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import open from '../../../../assets/open';



export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = "some restaurants ",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos  = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
        address = "100 some random street",
        openingHours,
        isOpenNow = true,
        rating = 3,
        isClosedTemporarily = true,
        placeId,
    } = restaurant ;

    const ratingArray = Array.from(new Array(Math.floor(rating)));
   return(
    <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
        <Text style={styles.title}>{name}</Text>
       <View style={{flexDirection:'row', alignItems:'center'}}>

           <Text>{ratingArray.map((_,i) => (<SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20}/>))}</Text>

           <View style={{flexDirection:'row', flex:1 , justifyContent:'flex-end' ,marginRight:10}}>

           {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>CLOSED TEMPORARILY</Text>)}

            <View style={{ paddingLeft: 16 }} />

            {isOpenNow && <SvgXml  xml={open} width={20} height={20} />}

            <View style={{ paddingLeft: 16 }} />
               <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </View>

       </View>
        <Text style={styles.title}>{address}</Text>
    </Card>
   )
}


const styles = StyleSheet.create({
    card : { backgroundColor:'white' , marginBottom:15},
    cover : {padding:20 , backgroundColor:'white'},
    title:{margin:10}
})