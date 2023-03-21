import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

export type HomeStackParamList = {
  Home: undefined;
  Level: {qualification: string};
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
          <HomeStack.Screen
            name="Level"
            component={LevelScreen}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
