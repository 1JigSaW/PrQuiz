import {HomeStackParamList} from "../App";
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from "react-native";

type Props = StackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
}
export default HomeScreen;
