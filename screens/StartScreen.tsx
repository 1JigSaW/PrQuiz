import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";


export default function StartScreen({navigation}: any) {

    const [countdown, setCountdown] = useState(3);

    const handleStartPress = () => {
        const intervalId = setInterval(() => {
            setCountdown(countdown - 1);
            if (countdown === 0) {
              clearInterval(intervalId);
              navigation.navigate('Middle');
            }
        }, 1000);
    };


    return (
        <View style={styles.backStart}>
            <TouchableOpacity  
                style={styles.buttonStart} 
                onPress={handleStartPress}
            >
                <Text style={styles.textButtonStart}>
                    Start
                </Text>
                <Text>
                    {countdown}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    backStart: {
        flex: 1,
        backgroundColor: "#007FFF",
        justifyContent: "center",
        alignItems: 'center',
    },
    
    buttonStart: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#003399',
    },
    textButtonStart: {
        color: "white",
        fontSize: 50,
        fontWeight: 'bold',
    }
});