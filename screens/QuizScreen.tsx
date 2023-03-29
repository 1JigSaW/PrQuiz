import {HomeStackParamList} from '../App';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Text,
  View,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useQuestionsList} from '../queries/Quiz';
import {useFocusEffect} from '@react-navigation/native';

type Props = StackScreenProps<HomeStackParamList, 'Quiz'>;

interface Answer {
  question: string;
  answer: any;
}

const QuizScreen = ({navigation, route}: Props) => {
  const [countdown, setCountdown] = useState(3);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const {
    group_id,
    subgroup_id,
    level_id,
    level_title,
    group_title,
    subgroup_title,
  } = route.params;
  const [selectedOption, setSelectedOption] = useState<any>('');
  const [trueAnswer, setTrueAnswer] = useState(0);
  const [falseAnswer, setFalseAnswer] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const questions = useQuestionsList(group_id, subgroup_id, level_id);
  const [text, setText] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      const onBeforeRemove = (e: any) => {
        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Show confirmation dialog
        Alert.alert(
          'Confirm exit',
          'Are you sure you want to exit?',
          [
            {text: 'Cancel', style: 'cancel', onPress: () => {}},
            {
              text: 'Exit',
              style: 'destructive',
              onPress: () => navigation.dispatch(e.data.action),
            },
          ],
          {cancelable: true},
        );
      };

      // Add listener for the beforeRemove event
      navigation.addListener('beforeRemove', onBeforeRemove);

      // Remove listener when the screen is unfocused or unmounted
      return () => {
        navigation.removeListener('beforeRemove', onBeforeRemove);
      };
    }, [navigation]),
  );

  const handleTextChange = (value: any) => {
    setText(value); // update state with current text value
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearTimeout(timer);
    }

    if (currentQuestionIndex === 10) {
      navigation.navigate('EndQuiz', {
        trueAnswer: trueAnswer,
        falseAnswer: falseAnswer,
        group_id: group_id,
        subgroup_id: subgroup_id,
        level_id: level_id,
        level_title: level_title,
        group_title: group_title,
        subgroup_title: subgroup_title,
        answers: answers,
      });
    }

    return () => {
      clearTimeout(timer);
    };
  }, [
    answers,
    countdown,
    currentQuestionIndex,
    falseAnswer,
    group_id,
    group_title,
    level_id,
    level_title,
    navigation,
    subgroup_id,
    subgroup_title,
    trueAnswer,
  ]);

  const handleOptionSelect = (option: any) => {
    // function to handle option selection
    setSelectedOption(option); // save user's selection to state
    if (option === questions.data?.[currentQuestionIndex]?.correct_answer) {
      setTrueAnswer(trueAnswer + 1);
    } else {
      setFalseAnswer(falseAnswer + 1);
    }

    const currentQuestion = questions.data?.[currentQuestionIndex];
    if (currentQuestion) {
      const answer = {
        question: currentQuestion.question,
        answer: option,
      };
      setAnswers([...answers, answer]);
    }
    setText('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

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
            <Pressable
              onPress={() =>
                handleOptionSelect(
                  questions.data?.[currentQuestionIndex]?.option_1,
                )
              }>
              <Text>{questions.data?.[currentQuestionIndex]?.option_1}</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                handleOptionSelect(
                  questions.data?.[currentQuestionIndex]?.option_2,
                )
              }>
              <Text>{questions.data?.[currentQuestionIndex]?.option_2}</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                handleOptionSelect(
                  questions.data?.[currentQuestionIndex]?.option_3,
                )
              }>
              <Text>{questions.data?.[currentQuestionIndex]?.option_3}</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                handleOptionSelect(
                  questions.data?.[currentQuestionIndex]?.option_4,
                )
              }>
              <Text>{questions.data?.[currentQuestionIndex]?.option_4}</Text>
            </Pressable>
          </View>
        )}
      {countdown === 0 &&
        questions.data?.[currentQuestionIndex]?.answer_type === 1 && (
          <View key={currentQuestionIndex}>
            <TextInput value={text} onChangeText={handleTextChange} />
            <Pressable
              onPress={() =>
                handleOptionSelect(
                  questions.data?.[currentQuestionIndex]?.option_2,
                )
              }>
              <Text>Send</Text>
            </Pressable>
          </View>
        )}
    </View>
  );
};

export default QuizScreen;
