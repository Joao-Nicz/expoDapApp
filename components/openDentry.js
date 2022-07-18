import { StyleSheet, Text, View , ScrollView, SafeAreaView, Button, Pressable, TextInput} from 'react-native';
import Dentry from './dentry';
import {DentryStatus} from './dentry';
import {Formik} from 'formik';
import { getMonthName } from '../lib/utils';
import { globalStyles } from '../lib/global';



const OpenDentry = (props) => {
    console.log(props);
    
    return(

        // Cannot put the return button and submit button onto this 

        // Ideally I would like to have a button that looks like the following at the bottom of the form 
        // <Button style={globalStyles.buttonStyle} onPress={() => setModalOpen(false) AND props.onClick}></Button>
        <View>
        

            <Formik
                initialValues={{ slider: '', firstQ: '', secondQ: '' }}
                onSubmit={(values) =>{
                    console.log(values);
                    props.submitClick();
                }}
               
            > 
                {(props)=> (
                    <View>
                        <TextInput
                        style={ODStyles.ODForm}
                        placeholder= 'slider'
                        onChangeText={props.handleChange('slider')}
                        value={props.values.slider}
                        />
                        <TextInput
                        style={ODStyles.ODForm}
                        placeholder= '1st Question'
                        onChangeText={props.handleChange('firstQ')}
                        value={props.values.firstQ}
                        />
                        <TextInput
                        style={ODStyles.ODForm}
                        placeholder= '2nd Question'
                        onChangeText={props.handleChange('secondQ')}
                        value={props.values.secondQ}
                        />

                        <Pressable onPress={props.handleSubmit}><Text style={globalStyles.submitBut}>submit entry</Text></Pressable>
                    </View>
                )}

            </Formik>
        </View>
    )
    
}

const ODStyles= StyleSheet.create({
    ODForm: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    ODContainer:{
        flex: 1,
        backgroundColor: 'white',
    }
});

export default OpenDentry;