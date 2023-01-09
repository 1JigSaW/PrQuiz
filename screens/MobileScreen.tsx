import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function MobileScreen({navigation}: any) {

    useEffect(() => {
        console.log("Rending Mobile Screen");

        return () => console.log("Unmounting Mobile Screen")
    }, [])

    return (
        <View>
            <Text>I am Mobile screen</Text>
            {/* <Button 
                title="Go to Planner" 
                onPress={() => navigation.navigate("Planner")}
            /> */}
        </View>
    )
}