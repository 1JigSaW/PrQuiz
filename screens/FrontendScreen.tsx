import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function FrontendScreen({navigation}: any) {

    useEffect(() => {
        console.log("Rending Frontend Screen");

        return () => console.log("Unmounting Frontend Screen")
    }, [])

    return (
        <View>
            <Text>I am Frontend screen</Text>
            <Button 
                title="Go to Frontend" 
                onPress={() => navigation.navigate("Frontend")}
            />
        </View>
    )
}