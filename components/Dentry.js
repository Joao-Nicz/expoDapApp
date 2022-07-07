import React from 'react';
import { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, Pressable} from 'react-native';
import { getMonthName } from '../lib/utils';
import { globalStyles } from '../lib/global';
import OpenDentry from './OpenDentry';

// sets the color of each module automatically
const Dentry = (props) => {
    const backgroundCompletionColor = StyleSheet.flatten (
        [globalStyles.itemText, stylesStatus[props.status] ?? stylesStatus.default]
        )
    const month = getMonthName(props.date);
    const day = props.date.getDate();
    const [modalOpen, setModalOpen] = useState(false);
    const returnBut = '<'
    const submitBut = 'submit'
    const submitClick = () => {
        setModalOpen(false);
        props.onClick();
    };
    return (
        // Makes each clickable module
        <TouchableOpacity 
        style={[globalStyles.item, backgroundCompletionColor]}
        onPress={() =>setModalOpen(true)}
        >
            <Modal visible={modalOpen}>
                <View style={globalStyles.itemLeft}>
                    <Pressable onPress={() => setModalOpen(false)}><Text style={globalStyles.returnButton}>{returnBut}</Text></Pressable>
                    <OpenDentry
                        month={month}
                        day={day}
                        submitClick={submitClick}>
                    </OpenDentry>
                </View>

                    {/* Styles do not come through to modal page */}
                    
            </Modal>
            
            <View style={globalStyles.itemLeft}>

                {/* This makes the colored calendar with importable dates */}
                <View style={globalStyles.squareAll}>
                    <View style={globalStyles.squareTop}>
                        <Text style={globalStyles.calendarMonth}>{month}</Text>
                    </View>
                    <View style={globalStyles.squareBot}>
                        <Text style={globalStyles.calendarDay}>{day}</Text>                      
                    </View>
                </View>

                {/* Text to inform user if entry is complete yet or not */}
                <Text style={globalStyles.itemText}>{props.text}</Text>
            </View>
        </TouchableOpacity> 
    )
}



const stylesStatus = StyleSheet.create ({
    complete: {backgroundColor: '#62DE78'},
    notcomplete: {backgroundColor: '#FF7474'},
    default: {
        backgroundColor: 'grey',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    }
});

export const DentryStatus={
    complete: 'complete',
    notcomplete: 'notcomplete',
};


export default Dentry;