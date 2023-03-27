import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LevelScreen from './screens/LevelScreen';
import StartScreen from './screens/StartScreen';
import QuizScreen from './screens/QuizScreen';
import SubGroupScreen from './screens/SubGroupScreen';

export type HomeStackParamList = {
  Home: undefined;
  Level: {
    group_id: number;
    group_title: string;
    subgroup_id: number;
    subgroup_title: string;
  };
  Start: {
    group_id: number;
    group_title: string;
    subgroup_id: number;
    subgroup_title: string;
    level_id: number;
    level_title: string;
  };
  Subgroup: {
    group_id: number;
    group_title: string;
  };
  Quiz: {
    group_id: number;
    subgroup_id: number;
    level_id: number;
  };
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
          <HomeStack.Screen name="Subgroup" component={SubGroupScreen} />
          <HomeStack.Screen name="Level" component={LevelScreen} />
          <HomeStack.Screen name="Start" component={StartScreen} />
          <HomeStack.Screen name="Quiz" component={QuizScreen} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
