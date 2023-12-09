import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';


export default function App() {
  const Stack=createStackNavigator();
  return (
   <Provider store={store}>
   <KeyboardAvoidingView behavior={Platform.OS==='ios' ? "height" : "padding"}
   style={{flex:1}}
   keyboardVerticalOffset={Platform.OS === "ios" ? -64 :0}>
   <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{
            headerShown:false
          }}/>
          <Stack.Screen name='MapScreen' component={MapScreen} options={{
            headerShown:false
          }}/>
        </Stack.Navigator>
        </SafeAreaProvider>
    </NavigationContainer>
   </KeyboardAvoidingView>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
