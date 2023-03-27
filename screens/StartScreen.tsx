import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../App';
import {Pressable, Text, View} from 'react-native';
import React from 'react';

type Props = StackScreenProps<HomeStackParamList, 'Start'>;

const StartScreen = ({navigation, route}: Props) => {
  const {
    level_title,
    level_id,
    group_title,
    group_id,
    subgroup_title,
    subgroup_id,
  } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: `${subgroup_title}: ${level_title}`,
    });
  }, [navigation, subgroup_title, level_title]);

  return (
    <View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('Quiz', {
              group_id: group_id,
              subgroup_id: subgroup_id,
              level_id: level_id,
            })
          }>
          <Text>Start</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default StartScreen;
