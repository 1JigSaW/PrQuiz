import React from 'react';
import {HomeStackParamList} from '../App';
import {StackScreenProps} from '@react-navigation/stack';
import {Pressable, Text, View} from 'react-native';

type Props = StackScreenProps<HomeStackParamList, 'EndQuiz'>;

const EndQuizScreen = ({navigation, route}: Props) => {
  // const levelsList = useLevelsList();
  const {
    trueAnswer,
    falseAnswer,
    group_id,
    subgroup_id,
    level_id,
    level_title,
    group_title,
    subgroup_title,
    answers,
  } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null, // empty component
    });
  }, [navigation]);

  return (
    <View>
      <Text>True: {trueAnswer}</Text>
      <Text>False: {falseAnswer}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Results', {
            group_id: group_id,
            subgroup_id: subgroup_id,
            level_id: level_id,
            answers: answers,
            trueAnswer: trueAnswer,
            falseAnswer: falseAnswer,
          });
        }}>
        <Text>Show Results</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Start', {
            group_id: group_id,
            subgroup_id: subgroup_id,
            level_id: level_id,
            level_title: level_title,
            group_title: group_title,
            subgroup_title: subgroup_title,
          });
        }}>
        <Text>Start Again</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>Choose Level</Text>
      </Pressable>
    </View>
  );
};
export default EndQuizScreen;
