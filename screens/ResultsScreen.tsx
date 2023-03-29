import {useQuestionsList} from '../queries/Quiz';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../App';
import {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

type Props = StackScreenProps<HomeStackParamList, 'Results'>;

const ResultsScreen = ({navigation, route}: Props) => {
  const {group_id, subgroup_id, level_id, answers, trueAnswer, falseAnswer} = route.params;
  const questions = useQuestionsList(group_id, subgroup_id, level_id);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleReturn = () => {
    navigation.navigate('EndQuiz', {
      group_id: group_id,
      subgroup_id: subgroup_id,
      level_id: level_id,
      trueAnswer: trueAnswer,
      falseAnswer: falseAnswer,
      answers: answers,
    });
  };

  return (
    <View>
      <View>
        <Text>{questions.data?.[currentQuestionIndex]?.question}</Text>
      </View>
      <View>
        {questions.data?.[currentQuestionIndex]?.answer_type === 2 && (
          <View>
            <View>
              <Text>{questions.data?.[currentQuestionIndex]?.option_1}</Text>
            </View>
            <View>
              <Text>{questions.data?.[currentQuestionIndex]?.option_2}</Text>
            </View>
            <View>
              <Text>{questions.data?.[currentQuestionIndex]?.option_3}</Text>
            </View>
            <View>
              <Text>{questions.data?.[currentQuestionIndex]?.option_4}</Text>
            </View>
          </View>
        )}
      </View>
      <View>
        <Text>{answers[currentQuestionIndex].answer}</Text>
      </View>
      <View>
        <Pressable onPress={handleNext} disabled={currentQuestionIndex === 9}>
          <Text>Next</Text>
        </Pressable>
        <Pressable
          onPress={handlePrevious}
          disabled={currentQuestionIndex === 0}>
          <Text>Previous</Text>
        </Pressable>
        <Pressable onPress={handleReturn}>
          <Text>Return</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResultsScreen;
