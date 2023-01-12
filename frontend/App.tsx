import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Navigation from './navigation';

export default function App() {
  return (
    <>
        <Navigation />
        <StatusBar hidden = {false} backgroundColor = "#007FFF" translucent = {true}/>
    </>
  );
}
