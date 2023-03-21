import {HomeStackParamList} from '../App';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View} from 'react-native';
import {useQualificationsList} from '../queries/Qualifications';

type Props = StackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const qualificationsList = useQualificationsList();

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
export default HomeScreen;
