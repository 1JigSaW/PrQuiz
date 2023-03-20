import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";

export type HomeStackParamList = {
  Home: undefined;
};
const queryClient = new QueryClient();

const HomeStack = createStackNavigator<HomeStackParamList>();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
            />
          </HomeStack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
  );
}

export default App;
