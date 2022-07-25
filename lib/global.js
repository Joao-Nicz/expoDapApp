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
      flex: 1,
    
    },
    modalContentRow: {
      flexDirection: 'row',
      padding: 10,
      marginBottom: 25,
      backgroundColor: 'black',
      flex: 0.05,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'flex-start'
    },
    returnButton:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold', 
      fontSize: 20,  
      flex: 1,
      display: 'flex'
      },
    submitBut:{
      backgroundColor: 'black',
      color: 'white',
      padding: 12,
      borderRadius: 10,
      marginBottom: 10,
      textAlign:'center',
      fontSize: 30,
      position: 'absolute',
      bottom: 0,
      right: 20,
      left: 20,
    },
    modalTitle: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      

        },
    
});

