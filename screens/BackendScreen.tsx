import { useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function BackendScreen({navigation}: any) {

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
                    onPress={() => navigation.navigate("Start")}
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
            <TouchableOpacity  
                style={styles.quest_button} 
                onPress={() => navigation.navigate("Questions")}
            >
                <Text style={styles.quest_textButton}>
                    Questions
                </Text>
            </TouchableOpacity>
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
    quest_button: {
        backgroundColor: "#003399",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    quest_textButton: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    }
});