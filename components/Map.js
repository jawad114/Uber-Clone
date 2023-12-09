import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectOrigin, setDestination } from '../slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function Map() {
    const origin=useSelector(selectOrigin);
    const destination=useSelector(setDestination);
    const mapRef=useRef(null)

    useEffect(()=>{
      if(!origin || !destination) return;

      mapRef.current.fitToSuppliedMarkers(['origin', 'destination'],{
        edgePadding:{top:50, bottom:50, right:50, left:50}
      })
    },[origin,destination])
  return (
    <MapView
    ref={mapRef}
    style={tw`flex-1`}
    mapType='mutedStandard'
    initialRegion={{
      latitude: origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  >
  {origin && destination && (
    <MapViewDirections
    origin={origin.description}
    destination={origin.description}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor='black'
    />
  )}

  {origin?.location} && (
    <Marker
    coordinate={{
        latitude: origin.location.lat,
      longitude: origin.location.lng,
    }}
        title='origin'
        description={origin.description}
        identifier='origin'
    />

  )
  </MapView>
  )
}
