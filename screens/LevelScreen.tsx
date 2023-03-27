import React from 'react';
import {HomeStackParamList} from '../App';
import {StackScreenProps} from '@react-navigation/stack';
import {Pressable, Text, View} from 'react-native';
import {useLevelsList} from '../queries/Levels';

type Props = StackScreenProps<HomeStackParamList, 'Level'>;

const LevelScreen = ({navigation, route}: Props) => {
  const levelsList = useLevelsList();
  const {group_id, group_title, subgroup_id, subgroup_title} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `${group_title}: ${subgroup_title}`,
    });
  }, [navigation, group_title, subgroup_title]);

  return (
    <View>
      {levelsList.data?.map(level => (
        <View key={level.id}>
          <Pressable
            onPress={() =>
              navigation.navigate('Start', {
                group_id: group_id,
                group_title: group_title,
                subgroup_id: subgroup_id,
                subgroup_title: subgroup_title,
                level_id: level.id,
                level_title: level.title,
              })
            }>
            <Text>{level.title}</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};
export default LevelScreen;
