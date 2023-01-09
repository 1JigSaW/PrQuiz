import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import BackendScreen from "../screens/BackendScreen";
import FrontendScreen from "../screens/FrontendScreen";
import MobileScreen from "../screens/MobileScreen";
import GeneralScreen from "../screens/GeneralScreen";


export default function Navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#007FFF',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: "white",
                },
                headerShadowVisible: false,
                headerTitleAlign: "center",
            }}  
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    headerShown: false,
                }} 
            />
            <Stack.Screen 
                name="Backend" 
                component={BackendScreen}
            />
            <Stack.Screen name="Frontend" component={FrontendScreen} />
            <Stack.Screen name="Mobile" component={MobileScreen} />
            <Stack.Screen name="General" component={GeneralScreen} />
        </Stack.Navigator>
    )
}
