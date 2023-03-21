import {HomeStackParamList} from '../App';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';

type Props = StackScreenProps<HomeStackParamList, 'Home'>;

const LevelScreen = ({navigation}: Props) => {
  return (
    <View>
      {qualificationsList.data?.map(qualification => (
        <View key={qualification.id}>
          <Text>{qualification.title}</Text>
        </View>
      ))}
    </View>
  );
};
export default LevelScreen;
