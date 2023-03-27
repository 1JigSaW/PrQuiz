import {HomeStackParamList} from '../App';
import {StackScreenProps} from '@react-navigation/stack';
import {Text, View, Pressable} from 'react-native';
import {useEffect, useState} from 'react';
import {useQuestionsList} from '../queries/Quiz';

type Props = StackScreenProps<HomeStackParamList, 'Quiz'>;

const QuizScreen = ({navigation, route}: Props) => {
  const [countdown, setCountdown] = useState(5);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const {group_id, subgroup_id, level_id} = route.params;
  const questions = useQuestionsList(group_id, subgroup_id, level_id);
  console.log(questions.data?.[0]?.question);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [countdown]);

  // const handleNextQuestion = () => {
  //   if (currentQuestionIndex === questions.data?.length - 1) {
  //     // End of test
  //     setShowQuestion(false);
  //   } else {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);
  //   }
  // };
  return (
    <View>
      {countdown !== 0 && (
        <Text>Get ready to start the test in {countdown} seconds...</Text>
      )}
      {countdown === 0 && (
        <Text>{questions.data?.[currentQuestionIndex]?.question}</Text>
      )}
      {countdown === 0 &&
        questions.data?.[currentQuestionIndex]?.answer_type === 2 && (
          <View>
            <Text>{questions.data?.[currentQuestionIndex]?.option_1}</Text>
            <Text>{questions.data?.[currentQuestionIndex]?.option_2}</Text>
            <Text>{questions.data?.[currentQuestionIndex]?.option_3}</Text>
            <Text>{questions.data?.[currentQuestionIndex]?.option_4}</Text>
          </View>
        )}
      {countdown === 0 &&
        questions.data?.[currentQuestionIndex]?.answer_type === 1 && (
          <View>
            <Text>{questions.data?.[currentQuestionIndex]?.answer_text}</Text>
          </View>
        )}
    </View>
  );
};

export default QuizScreen;
