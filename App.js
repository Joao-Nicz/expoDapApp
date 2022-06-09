import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import Dentry from './components/Dentry';


export default function App() {
  return (
    <View style={styles.container}>
        
        
        {/* Diary Page */}
        <View style={styles.Dpage}>
          <Text style={styles.Dtitle}>12 Entries</Text>

          <ScrollView style={styles.Ditems}>
            {/* This is where the different modules go */}
            <Dentry text={'Entry not complete'} day={'28'} month={'Jun'} />
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <View style={styles.Buffer}/>
          </ScrollView>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ccfed',
  },
  Dpage: {
    paddingTop: 80,
    paddingHorizontal: 20
  },

  Dtitle: {
    fontSize: 54,
    fontWeight: 'bold',
    color: 'white',
  },
  Ditems: {},
  Buffer: {
    marginTop: 70,
  },
});
