import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red'
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
      img:{
        height:'10%',
        width:'20%',
        alignSelf:'center',
        padding:10
      },
      questionText:{
        fontWeight:'600',
        fontSize:16,
        marginHorizontal:20
      },
      userName:{
        fontWeight: '700', 
        fontSize: 18, 
        marginBottom: 10
      },
      userDob:{
        fontWeight: '700', 
        fontSize: 18,
      },
      title:{
        textAlign: 'center', 
        fontSize: 28 
      },
      user:{
        margin: 20 
      },
      options:{
        fontWeight: '500', 
        textAlign: 'center'
      },
      render:{
        marginBottom: 20, 
        borderWidth: 1, 
        margin: 10, 
        borderRadius: 10, 
        borderColor: '#C48FD8', 
        paddingVertical: 10 
      }
})

export default styles