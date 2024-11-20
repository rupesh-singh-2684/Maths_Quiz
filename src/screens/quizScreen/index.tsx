import { View, Text, Image, Dimensions, TouchableOpacity, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { Icons } from '../../assets'
import { FlatList } from 'react-native-gesture-handler'

const QuizScreen = ({ route,navigation }: any) => {

  // const route = useRoute();
  const { difficulty, numQuestion, UserName, DOB } = route.params as { difficulty: any, numQuestion: number, UserName: any, DOB: any }
  // console.log("difficulty", dificulty);
  // console.log("numQuestion", numQuestion);

  // const { numQuestions } = route.params;

  const [questions, setQuestions]: any = useState([]);
  const [answers, setAnswers] = useState([]);
  const [options, setOptions] = useState([]);
  const [userClickedOptions, setUserClickedOptions]: any = useState({});

  const getRandomInt = (num: any) => Math.floor(Math.random() * num);

  const operators = ['+', '-', '*', '/'];

  const generateOptions = (answer: any) => {
    const allOptions = [];
    for (let i = 0; i < 3; i++) {
      allOptions.push(getRandomInt(100));
    }
    allOptions.push(answer);
    return allOptions;
  };

  const fisherYatesShuffle = (arr: any) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const generateQuestionsAnswersOptions = (num: any) => {
    const newQuestions: any = [];
    const allAnswers: any = [];
    const allOptions: any = [];
    for (let i = 0; i < num; i++) {

      let numb = 1
      if (difficulty === 'easy') {
        numb = 100
      }
      else if (difficulty === 'medium') {
        numb = 1000
      }
      else if (difficulty === 'hard') {
        numb = 2000
      }

      const op1 = getRandomInt(numb);
      const op2 = getRandomInt(numb);
      const indexOfOperator = getRandomInt(operators.length);
      const operator = operators[indexOfOperator];

      let answer = 0;
      if (operator === "*") answer = op1 * op2;
      else if (operator === "+") answer = op1 + op2;
      else if (operator === "-") answer = op1 - op2;
      else if (operator === "/") answer = parseFloat((op1 / op2).toFixed(2));

      const que = `${op1} ${operator} ${op2}`;
      newQuestions.push({ question: que });
      allAnswers.push(answer);
      const op = generateOptions(answer);
      const shuffledArr = fisherYatesShuffle([...op]);
      allOptions.push(shuffledArr);
    }
    setQuestions(newQuestions);
    setAnswers(allAnswers);
    setOptions(allOptions);
  };

  useEffect(() => {
    generateQuestionsAnswersOptions(numQuestion);
  }, [numQuestion]);

  const handleOptionChange = (questionIndex: any, value: any) => {
    setUserClickedOptions({
      ...userClickedOptions,
      [questionIndex]: value,
    });
  };

  const handleCheckResult = () => {
    let count = 0;
    for (let i = 0; i < answers.length; i++) {
      if (userClickedOptions[i] === answers[i]) {
        count++;
      }
    }

    navigation.navigate('ResultScreen', { result: answers.length, correctanswer:count,setAnswers,setOptions,setQuestions,setUserClickedOptions,difficulty,UserName,numQuestion,DOB})
  };


  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#C48FD8' }}>
      </SafeAreaView>
      <Image source={Icons.homeIcon} style={styles.img} />
      <Text style={styles.title}>🅜🅐🅣🅗🅢 🅠🅤🅘🅩</Text>
      <View style={styles.user}>
        <Text style={styles.userName}>{UserName}</Text>
        <Text style={styles.userDob}>{DOB}</Text>
      </View>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={styles.render}>
            <Text style={styles.questionText}>{`Q ${index + 1}: ${item.question}`}</Text>
            {options[index]?.map((option: any, optIndex: any) => (
              <TouchableOpacity
                key={optIndex}
                onPress={() => handleOptionChange(index, option)}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#EBEBEB',
                  marginVertical: 5,
                  borderRadius: 10,
                  width: '90%',
                  alignSelf: 'center',
                  backgroundColor: userClickedOptions[index] === option ? 'lightblue' : 'white',
                }}>
                <Text style={styles.options}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
      <TouchableOpacity style={styles.startButton} onPress={handleCheckResult}>
        <Text style={styles.buttonText}>View Result</Text>
      </TouchableOpacity>
    </>
  );
}

export default QuizScreen