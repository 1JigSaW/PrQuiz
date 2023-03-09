import { useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function MiddleScreen({navigation}: any) {
    return (
        <View style={styles.back}>
            <View style={styles.container}>
                <View style={styles.question_block}>
                    <Text style={styles.question_text}>Test</Text>
                </View>
                <View style={styles.detail_block}>
                    <View style={styles.score}>
                        <Text style={styles.question_text}>Score</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.question_text}>Time</Text>
                    </View>
                </View>
                <View style={styles.option_block}>
                    <TouchableOpacity  
                        style={styles.option} 
                    >
                        <Text style={styles.option_text}>
                            Option1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  
                        style={styles.option} 
                    >
                        <Text style={styles.option_text}>
                            Option2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  
                        style={styles.option} 
                    >
                        <Text style={styles.option_text}>
                            Option3
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity  
                        style={styles.option} 
                    >
                        <Text style={styles.option_text}>
                            Option4
                        </Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: 'center',
        marginHorizontal: 10,
        marginBottom: 10
    },
    question_block: {
        backgroundColor: "#003399",
        height: 240,
        borderRadius: 16,
        justifyContent: "center",
        marginBottom: 5
    },
    detail_block: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    score: {
        backgroundColor: "#003399",
        height: 50,
        width: "49%",
        borderRadius: 16,
        justifyContent: 'center',
        marginRight: "1%" 
    },
    time: {
        backgroundColor: "#003399",
        height: 50,
        width: "49%",
        borderRadius: 16,
        justifyContent: 'center',
        marginLeft: "1%" 
    },
    question_text: {
        color: "white",
        marginHorizontal: 10,
        marginVertical: 10,
        textAlign: "center",
        fontSize: 18
    },
    option_block: {
        marginTop: 5
    },
    option: {
        backgroundColor: "#003399",
        borderRadius: 16,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 7
    },
    option_text: {
        fontSize: 23,
        textAlign: "center",
        color: "white"
    }
});