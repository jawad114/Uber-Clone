 import React from 'react'
import { Image, SafeAreaView,Text, View } from 'react-native'
 import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { useDispatch } from 'react-redux';
import {setOrigin, setDestination } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites';
 const img=require('../assets/1.png')
 export default function HomeScreen() {
  const dispatch=useDispatch();
   return (
     <SafeAreaView style={tw`h-full`}>
        <View style={tw`p-5`}>
            <Image style={{width:100, height:100, resizeMode:'contain'}} source={img}/>
            <GooglePlacesAutocomplete
            styles={{
              container:{
                flex:0,
              },
              textInput:{
                fontSize:18
              }
            }}
            onPress={(data,details=null)=>{
              dispatch(setOrigin({
                location:details.geometry.location,
                description:data.description
              }))
            }}
            fetchDetails={true}
            
            enablePoweredByContainer={false}
            returnKeyType={'search'}
            query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
              key: `IzaSyCqVEQtG6n6AAE_wdlbUyqRN7UT6KCBfU4`,
              language: 'en', // language of the results
              // types: '(cities)' // default: 'geocode'
            }}
            placeholder='Where From?'
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
            />
            <NavOptions/>
            <NavFavourites/>
        </View>
     </SafeAreaView>
   )
 }
 