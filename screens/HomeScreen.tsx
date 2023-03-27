import {HomeStackParamList} from '../App';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View, Pressable} from 'react-native';
import {useGroupsList} from '../queries/Group';

type Props = StackScreenProps<HomeStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  const groupList = useGroupsList();

  return (
    <View>
      {groupList.data?.map(group => (
        <View key={group.id}>
          <Pressable
            onPress={() =>
              navigation.navigate('Subgroup', {
                group_id: group.id,
                group_title: group.title,
              })
            }>
            <Text>{group.title}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};
export default HomeScreen;
