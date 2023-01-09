import { useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default function HomeScreen({navigation}: any) {

    useEffect(() => {
        console.log("Rending Home Screen");

        return () => console.log("Unmounting Home Screen")
    }, [])

    return (
        // <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.back}>
            <View style={styles.container}>
                <TouchableOpacity  
                    style={styles.button} 
                    onPress={() => navigation.navigate("Backend")}
                >
                    <Text style={styles.textButton}>
                        Backend
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.button} 
                    onPress={() => navigation.navigate("Frontend")}
                >
                    <Text style={styles.textButton}>
                        Frontend
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.button} 
                    onPress={() => navigation.navigate("Mobile")}
                >
                    <Text style={styles.textButton}>
                        Mobile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  
                    style={styles.button} 
                    onPress={() => navigation.navigate("General")}
                >
                    <Text style={styles.textButton}>
                        General
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        // </ImageBackground>
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
