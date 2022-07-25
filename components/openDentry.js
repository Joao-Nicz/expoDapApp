import { StyleSheet, Text, View , ScrollView, SafeAreaView, Button, Pressable, TextInput} from 'react-native';
import {Formik} from 'formik';
import { globalStyles } from '../lib/global';



const OpenDentry = (props) => {
    console.log(props.valuesStored);
    console.log({ slider: '', firstQ: '', secondQ: '',...props.valuesStored })
 
    
    return(

        // Cannot put the return button and submit button onto this 

        // Ideally I would like to have a button that looks like the following at the bottom of the form 
        // <Button style={globalStyles.buttonStyle} onPress={() => setModalOpen(false) AND props.onClick}></Button>
        
        

            <Formik
                initialValues={{ painLevel: '',painDesc: '', firstQ: '', secondQ: '',...props.valuesStored }}
                onSubmit={(values) =>{
                    props.submitClick(values);
                    console.log('button pressed')
                }}
            > 
                {({handleChange, values, handleSubmit})=> (
                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                        <View>
                            <Text style={ODStyles.ODTitles}>Pain level</Text> 
                            <TextInput
                            style={ODStyles.ODForm}
                            placeholder= 'from 1 to 10 (10 being the worst)'
                            onChangeText={handleChange('painLevel')}
                            value={values.painLevel}
                            keyboardType='numeric'
                            />
                            <Text style={ODStyles.ODTitles}>Pain description</Text> 
                            <TextInput
                            style={ODStyles.ODForm}
                            placeholder= 'eg. burning aching stabbing sharp dull other'
                            onChangeText={handleChange('painDesc')}
                            value={values.painDesc}
                            />
                            <Text style={ODStyles.ODTitles}>Changes in bite</Text> 
                            <TextInput
                            style={ODStyles.ODForm}
                            placeholder= 'eg. my bite has become slightly shifted to the right'
                            onChangeText={handleChange('firstQ')}
                            value={values.firstQ}
                            />
                            <Text style={ODStyles.ODTitles}>Extra comments</Text> 
                            <TextInput
                            style={ODStyles.ODForm}
                            placeholder= 'eg. strange sensation in the jaw'
                            onChangeText={handleChange('secondQ')}
                            value={values.secondQ}
                            numberOfLines={5}
                            textAlignVertical='top'
                            />
                        </View>
                        <View style={globalStyles.submitBut} >
                            <Button onPress={handleSubmit} title='submit' color={'black'}/>
                        </View>
                    </View>
                )}

            </Formik>
    )
    
}

const ODStyles= StyleSheet.create({
    ODForm: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginHorizontal: 10,
        marginVertical: 7,
    },
    ODFormTall: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 5,
        fontSize: 18,
        borderRadius: 6,
        marginHorizontal: 10,
        marginVertical: 7,
        paddingVertical: 20,
    

    },
    ODTitles:{
        fontSize: 20,
        marginHorizontal:10,
    }
});

export default OpenDentry;