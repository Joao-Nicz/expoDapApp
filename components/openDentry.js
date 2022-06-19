import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import Dentry from './dentry';
import {DentryStatus} from './dentry';
import {Formik} from 'formik';

export default function OpenDentry(){
    return(
        <View style={oDStyles.ODContainer}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                onSubmit={(values) => {

                }}
            >
                {(formikprops)=> (
                    <View>
                        <TextInput
                        style={oDStyles.ODForm}
                        placeholder= 'Review Title'
                        onChangeText={props.handleChange('title')}
                        value={props.value.title}
                        />
                    </View>
                )}    
            </Formik>
        </View>
    )
}

const oDStyles= StyleSheet.create({
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