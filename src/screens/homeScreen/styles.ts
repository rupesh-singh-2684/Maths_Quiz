import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#C5B8C7',
        // marginBottom:20,
    },
    title:{
        textAlign: 'center', 
        fontSize: 18, 
        fontWeight: '700',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },
    inputGroup: {
        marginBottom: 10,
        marginHorizontal:20
      },
      label: {
        fontSize: 14,
        marginBottom: 8,
        
      },
      textInput: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 8,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      button:{
        alignItems:'center',
        marginVertical:20,
        borderWidth:1,
        marginHorizontal:100,
        borderRadius:10,
        padding:10,
        backgroundColor:"#23B9FF",
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
      userDetails:{
        backgroundColor:'#C5B8C7',
        marginHorizontal:20,
        borderRadius:10,
        padding:10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      userData:{
        padding:10,
        backgroundColor:'#fff',
        borderRadius:10,
      },
      userDataText:{
        marginBottom:10,
        fontWeight:'500',
        fontSize:18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      difficultyButtons:{
        alignItems:'center',
        marginVertical:20,
        borderWidth:1,
        borderRadius:10,
        padding:10,
        backgroundColor:"#000",
        borderColor:'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      startButton:{
        alignItems:'center',
        marginVertical:20,
        borderWidth:1,
        borderRadius:10,
        padding:10,
        width:'70%',
        alignSelf:'center',
        backgroundColor:"#61B86B",
        borderColor:'transparent',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      optionContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10
      },
      img:{
        height:'10%',
        width:'20%'
      }
})

export default styles