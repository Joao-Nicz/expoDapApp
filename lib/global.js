import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    Dtitle: {
        fontSize: 54,
        fontWeight: 'bold',
        color: 'black',
      },
      container: {
        flex: 1,
        backgroundColor: 'white',
      },
      Dpage: {
        paddingTop: 30,
        paddingHorizontal: 20
      },
      Ditems: {},
      Buffer: {
        marginTop: 70,
      },
      item: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    squareTop:{
        width:60,
        height: 20,
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
        backgroundColor: 'red',
        flexDirection: 'column',
        alignItems: 'center',
    },
    squareBot: {
        width: 60,
        height: 40,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius:7,
        marginRight: 15,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'white',
    },
    calendarDay: {fontSize: 30, color: 'black',},
    calendarMonth: { color: 'white',},
    itemText: {
        color: 'white',
        fontSize: 30,
    },
    modalContentCol: {
      flexDirection: 'column',
    },
    modalContentRow: {
      flexDirection: 'row',
      padding: 25,
      marginBottom: 20,
      backgroundColor: 'black',
    },
    returnButton:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 3,
      paddingHorizontal: 15,
      backgroundColor: 'black',
      color: 'white',
      marginRight: 30,
      marginLeft: 1,
      fontWeight: 'bold', 
      position: 'fixed',
      fontSize: 20,
      top: 5,
      left: 5,
      },
    submitBut:{
      backgroundColor: 'black',
      color: 'white',
      padding: 12,
      borderRadius: 10,
      marginBottom: 20,
      textAlign:'center',
      fontSize: 30,
      position: 'fixed',
      bottom: 0,
      right: 20,
      left: 20,
    },
    modalTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      position: 'fixed',
      top: 3,
      right: 200,
      left: 200,
    },
    
});

