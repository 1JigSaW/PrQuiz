import { useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function BackendScreen({navigation}: any) {

    useEffect(() => {
        console.log("Rending Backend Screen");

        return () => console.log("Unmounting Backend Screen")
    }, [])

    return (
        <View style={styles.back}>
            <View style={styles.container}>
                <TouchableOpacity  
                    style={styles.button} 
                    onPress={() => navigation.navigate("Junior")}
                >
                    <Text style={styles.textButton}>
                        Junior
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.button} 
                    onPress={() => navigation.navigate("Middle")}
                >
                    <Text style={styles.textButton}>
                        Middle
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.button} 
                    onPress={() => navigation.navigate("Senior")}
                >
                    <Text style={styles.textButton}>
                        Senior
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor: "#007FFF",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 60
    },
    button: {
        alignItems: "center",
        backgroundColor: "#003399",
        padding: 10,
        marginBottom: 10,
        borderRadius: 16
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});