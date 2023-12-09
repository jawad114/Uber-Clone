import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from 'react-native-vector-icons/Icon'

const NavigateCard = () => {
    const dispatch=useDispatch()
    const navigation=useNavigation();
   
  return (
   <SafeAreaView>
   <View style={tw`border-t border-gray-200 flex-shrink`}>
    <View>
        <GooglePlacesAutocomplete
        placeholder='Where to got?'
        styles={toInputBoxStyles}
        fetchDetails={true}
        returnKeyType={'search'}
        miniLength={2}
        onPress={(data, details=null)=>{
            dispatch(setDestination({
                location:details.geometry.location,
                descriptiption:data.description
            }))
            navigation.navigate('RideOptionsCard')
        }}
        enablePoweredByContainer={false}
        query={{
              key: `IzaSyCqVEQtG6n6AAE_wdlbUyqRN7UT6KCBfU4`,
              language: 'en', // language of the results
              
            }}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}/>
    </View>
    <NavFavourites/>
    </View>
    <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name='car' type="font-awesome" color={'white'} size={16}/>
            <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon name='fast-food-outline' type="ionicon" color={'black'} size={16}/>
            <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingTop:20,
        flex:0

    },
    textInput:{
        backgroundColor:'#DDDDDF',
        borderRadius:0,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }
})