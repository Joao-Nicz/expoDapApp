import { StyleSheet, Text, View , ScrollView, SafeAreaView} from 'react-native';
import Dentry from './components/Dentry';
import {DentryStatus} from './components/Dentry';

export const AppStatus={
  submitted: DentryStatus.complete,
  inProgress: DentryStatus.halfcomplete,
  empty: DentryStatus.notcomplete,
};


const StatusText={
  submitted: 'Entry Complete!',
  inProgress: 'Entry not finished!',
  empty: 'No entry yet'
};
const calendarEvents = [
  {
    id: 1,
    text: StatusText.submitted,
    day: '28',
    month: 'Jun',
    status: AppStatus.submitted,
  },
  {
    id: 2,
    text: StatusText.inProgress,
    day: '27',
    month: 'Jun',
    status: AppStatus.inProgress,
  },
  {
    id: 3,
    text: StatusText.empty,
    day: '26',
    month: 'Jun',
    status: AppStatus.empty,
  },
  {
    id: 4,
    text: StatusText.empty,
    day: '25',
    month: 'Jun',
    status: AppStatus.empty,
  },

];

export default function App() {

  return (
    <View style={styles.container}>
        
        
        {/* Diary Page */}
        <View style={styles.Dpage}>
          <Text style={styles.Dtitle}>12 Entries</Text>

          <ScrollView style={styles.Ditems}>
            {calendarEvents.map((calendarevent) => (
              <Dentry key={calendarevent.id} {...calendarevent}/>
            ))}
            {/* This is where the different modules go */}
            {/* <Dentry text={'Entry not complete'} day={'28'} month={'Jun'} status={AppStatus}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'} status={AppStatus}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Nov'} status={AppStatus}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/>
            <Dentry text={'Entry Complete!'} day={'27'} month={'Jun'}/> */}
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
