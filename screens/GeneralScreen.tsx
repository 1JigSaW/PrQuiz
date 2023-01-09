import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function GeneralScreen({navigation}: any) {

    useEffect(() => {
        console.log("Rending General Screen");

        return () => console.log("Unmounting General Screen")
    }, [])

    return (
        <View>
            <Text>I am General screen</Text>
            {/* <Button 
                title="Go to Planner" 
                onPress={() => navigation.navigate("Planner")}
            /> */}
        </View>
    )
}