import { View, Text, SafeAreaView, TouchableOpacity, Alert, FlatList, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Icons } from '../../assets'

const HomeScreen = ({ navigation }: { navigation: any }) => {

  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [submitData, setSubmitData] = useState({ name, dob })
  const [selectedLevel, setSelectedLevel] = useState('')
  const [noQuestions, setNoQuestions] = useState("");

  const handleSave = () => {
    const submitUserData: any = {
      name,
      dob,
    };
    if (!name || !dob) {
      Alert.alert("Missing User Information", "Please fill required fields.");
      return;
    }
    setSubmitData(submitUserData)
    console.log("User Data Saved:", submitUserData);
    Alert.alert("Success", "User saved successfully!");
  };

  const handleEasy = () => {
    setSelectedLevel("easy")
  }
  const handleMedium = () => {
    setSelectedLevel("medium")
  }
  const handleHard = () => {
    setSelectedLevel("hard")
  }

  const handleNav = () => {

    if (!name || !dob || !noQuestions) {
      Alert.alert("Missing Information", "Please Select & fill required fields.");
      return;
    }
    // console.log("dsadasda");
    navigation.navigate('QuizScreen', { difficulty: selectedLevel, numQuestion: noQuestions, UserName:name, DOB:dob })
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
      <Image source={Icons.homeIcon} style={styles.img} />
      <Text style={styles.title}>Fill User Details...</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter DOB"
          value={dob}
          onChangeText={setDob}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <View style={styles.userDetails}>
        <View style={styles.userData}>
          <Text style={styles.userDataText}>Name : {submitData.name}</Text>
          <Text style={styles.userDataText}>DOB : {submitData.dob}</Text>
        </View>

        <Text style={styles.title}>Select Difficulty Level</Text>

        <View style={styles.optionContainer}>
          <TouchableOpacity style={[styles.difficultyButtons]} onPress={handleEasy}>
            <Text style={styles.buttonText}>Easy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.difficultyButtons} onPress={handleMedium}>
            <Text style={styles.buttonText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.difficultyButtons} onPress={handleHard}>
            <Text style={styles.buttonText}>Hard</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Number Of Questions</Text>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter no. of questions"
            value={noQuestions}
            onChangeText={setNoQuestions}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.startButton} onPress={handleNav}>
        <Text style={styles.buttonText}>Start Quiz</Text>
      </TouchableOpacity>
    </>
  )
}

export default HomeScreen