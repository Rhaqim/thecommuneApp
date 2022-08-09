import React from 'react';

// Tailwind CSS
import { TailwindProvider } from 'tailwindcss-react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Components
import HomeScreen from './components/Home/HomeScreen';
import DetailsScreen from './components/Profile/DetailsScreen';
import CreatePostScreen from './components/Posts/CreatePostScreen';
import Main from './components/MainPage';
import Restaurants from './components/Restaurants';

// Authentication
import Login from './components/auth/Login';
import Register from './components/auth/Register';

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator initialRouteName='Restaurant'>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="CreatePost" component={CreatePostScreen} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Restaurant" component={Restaurants} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}
