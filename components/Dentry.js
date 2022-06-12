import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Dentry = (props) => {
    const itemTextStyle = StyleSheet.flatten (
        [styles.itemText, stylesStatus[props.status] ?? stylesStatus.default]
        )
    return (
        // Makes each clickable module
        <TouchableOpacity style={styles.item}>
                <View style={styles.itemLeft}>

                    {/* This makes the colored calendar with importable dates */}
                    <View style={styles.squareAll}>
                        <View style={styles.squareTop}>
                            <Text style={styles.calendarMonth}>{props.month}</Text>
                        </View>
                        <View style={styles.squareBot}>
                            <Text style={styles.calendarDay}>{props.day}</Text>                      
                        </View>
                    </View>

                    {/* Text to inform user if entry is complete yet or not */}
                    {/* ASK SHAUN HOW TO DO THE ${} THING INTO STYLES */}
                    <Text style={itemTextStyle}>{props.text}</Text>
                </View>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
  
    item: {
        backgroundColor: '#75d1b6',
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
});


const stylesStatus = StyleSheet.create ({
    complete: {backgroundColor: 'green'},
    halfcomplete: {backgroundColor: 'orange'},
    notcomplete: {backgroundColor: 'red'},
    default: {backgroundColor: 'grey'}
});

export const DentryStatus={
    complete: 'complete',
    halfcomplete: 'halfcomplete',
    notcomplete: 'notcomplete',
};


export default Dentry;