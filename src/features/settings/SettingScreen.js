import React from 'react';
import { ImageBackground } from 'react-native';
import { List } from 'react-native-paper';




export const SettingScreen = () => {
    return(
      <ImageBackground source={require('../../../assets/home_bg.jpg')} resizeMode="cover" 
      style={{flex:1,justifyContent:'center',position:'absolute', width:'100%',height:'100%'}}>
        <List.Section>
    <List.Item 
   style={{padding:16}}
   title='Your Coins'
   description='make orders to get more coins'
   left={(props) => <List.Icon {...props} color='orange' icon='heart' />}
   />

<List.Item 
 style={{padding:16}}
 title='Your rewards'
 left={(props) => <List.Icon {...props} color='orange' icon='heart' />}
 />
<List.Item 
 style={{padding:16}}
 title='privacy and security'
 left={(props) => <List.Icon {...props} color='orange' icon='door' />}
 />
<List.Item 
 style={{padding:16}}
 title='sounds and vibration'
 left={(props) => <List.Icon {...props} color='orange' icon='folder' />}
 />
<List.Item 
 style={{padding:16}}
 title='app theme'
 left={(props) => <List.Icon {...props} color='orange' icon='door' />}
 />
<List.Item 
 style={{padding:16}}
 title='Your accounts'
 description='sign up to verify your account'
 left={(props) => <List.Icon {...props} color='orange' icon='heart' />}
 />
  <List.Item 
style={{padding:16}}
title='notification'
left={(props) => <List.Icon {...props} color='orange' icon='folder' />}
/>
  <List.Item 
 style={{padding:16}}
 title='Assistant'
 description='talk with our assistant if you have problem with maya app'
 left={(props) => <List.Icon {...props} color='orange' icon='folder' />}
 />
 
        </List.Section> 
        </ImageBackground>

         )}