import { StyleSheet, Text, View , ScrollView, SafeAreaView, Button} from 'react-native';
import Dentry from './dentry';
import {DentryStatus} from './dentry';
import {Formik} from 'formik';
import { getMonthName } from '../lib/utils';


const OpenDentry = (props) => {

    return(

        // ********************************IGNORE FOR NOW **************************************
       
        // <View style={oDStyles.ODContainer}>
        //     <Formik
        //         initialValues={{title: '', body: '', rating: ''}}
        //         onSubmit={(values) => {
        //         }}
        //     >
        //         {(formikprops)=> (
        //             <View>
        //                 <TextInput
        //                 style={oDStyles.ODForm}
        //                 placeholder= 'Review Title'
        //                 onChangeText={props.handleChange('title')}
        //                 value={props.value.title}
        //                 />
        //             </View>
        //         )}    
        //     </Formik>
        // </View>
        
        // ********************************IGNORE FOR NOW ***************************************


        
        // Cannot put the return button and submit button onto this 

        // Ideally I would like to have a button that looks like the following at the bottom of the form 
        // <Button style={globalStyles.buttonStyle} onPress={() => setModalOpen(false) AND props.onClick}></Button>
        <View>
            <Text>{props.dateExport}</Text>
           
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

export default OpenDentry;