import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from '@rneui/base';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';
import { useSelector } from 'react-redux';
import { setOrigin } from '../slices/navSlice';

const data = [
  {
    id: 123,
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: 456,
    title: 'Order Food',
    image: 'https://links.papareact.com/28w',
    screen: 'HomeScreen',
  },
];

export default function NavOptions() {
  const navigation = useNavigation();
  const origin=useSelector(setOrigin);

  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id.toString()} // Ensure id is a string
      renderItem={({ item }) => (
        <TouchableOpacity
        disabled={!origin}
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 bg-gray-200 m-2 w-40`}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`mt-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
