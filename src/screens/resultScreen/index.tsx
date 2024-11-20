import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Icons, Images } from '../../assets'

const ResultScreen = ({ route, navigation }: any) => {
    


    const handleNav =() =>{
        navigation.navigate('QuizScreen', {UserName,DOB,numQuestion,difficulty})
    }

    const { result,setAnswers,setOptions,setQuestions,setUserClickedOptions, UserName, DOB, correctanswer,difficulty,numQuestion }:any = route.params as { result: any, UserName: any, DOB: any, correctanswer: any }
    useEffect(()=>{
        setAnswers([]),
        setOptions([]),
        setQuestions([]),
        setUserClickedOptions({})
    },[])

    return (
        <>
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
            <View style={styles.mainContainer}>
                <Text style={styles.headText1}>
                    Congratulations
                </Text>
                <Text style={styles.headText2} numberOfLines={2}>
                    You Have Successfully Completed {'\n'} Your Quiz
                </Text>
                <Image source={Images.doneImage} style={styles.img} />
                <Text style={styles.headText2} numberOfLines={2}>
                    You got {correctanswer} out of {result} correct
                </Text>
            </View>

            <TouchableOpacity style={styles.startButton} onPress={handleNav}>
                <Text style={styles.buttonText}>Retake</Text>
            </TouchableOpacity>
            {/* <Text>{result}</Text>
      <Text>{correctanswer}</Text> */}
        </>
    )
}

export default ResultScreen
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AA77BE'
    },
    headText1: {
        marginTop: 10,
        fontSize: 25,
        fontWeight: '700',
        color: ' #A550C7',
        alignSelf: 'center',
    },
    headText2: {
        marginVertical: 20,
        fontSize: 22,
        fontWeight: '700',
        color: ' #A550C7',
        alignSelf: 'center',
        textAlign: 'center'
    },
    mainContainer: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    },
    img: {
        height: 100,
        width: 100,
        alignSelf: 'center'
    },
    startButton:{
        alignItems:'center',
        borderWidth:1,
        borderRadius:10,
        padding:15,
        margin:25,
        backgroundColor:"#61B86B",
        borderColor:'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      buttonText:{
        fontWeight:'500',
        fontSize:14,
        color:'#fff'
      },

})