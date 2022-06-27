import { StyleSheet, Text, View, ScrollView, SafeAreaView, Modal } from 'react-native';
import Dentry from './components/dentry';
import { DentryStatus } from './components/dentry';
import OpenDentry from './components/OpenDentry';
import useCalendarEvents from './hooks/useCalendarEvents';
import { globalStyles } from './lib/global';


/*
pseudo code:

If submit button is pressed then Completion = Complete ?? Completion = Uncomplete;

const Uncompleted ={
  text: 'uncomplete',
  status: DentryStatus.notcomplete,
};
const Completed = {
  text: 'complete',
  status: DentryStatus.complete,
};

const Date ={
  day: Today.date,
  month: Today.month
};

const NewDay = if time is 12am then +1

calendarEvents = [
  {
    id: NewDay,
    Completion, 
    Date,
  }
]


*/
/*
Need to automate this 
const calendarEvents = [
  {
    id: 1, //create a new one every day at 12am
    day: '1', //automatically get date
    month: 'Jul', //automatically get month
    text: StatusText.submitted, //this needs to read if the user has pressed submit yet
    status: DentryStatus.complete, //this needs to read if the user has pressed submit yet
  },
  {
    id: 2,
    day: '40',
    month: 'Jun',
    text: StatusText.empty,
    status: DentryStatus.notcomplete,
  },
  {
    id: 3,
    day: '30',
    month: 'Jun',
  }
]; */

export default function App() {
  const [calendarEvents, completeCalendarEvent] = useCalendarEvents();

  return (
    <View style={globalStyles.container}>

      {/* Diary Page */}
      <View style={globalStyles.Dpage}>
        <Text style={globalStyles.Dtitle}>{calendarEvents.length} Entries</Text>

        <ScrollView style={globalStyles.Ditems}>
          {/* calls on the CalendarEvents list and maps out its items*/}
          {calendarEvents.map((calendarevent) => (
            // This is used to mapp out every item with a new id on the list
            <Dentry
            key={calendarevent.id} {...calendarevent} 
            onClick={() => completeCalendarEvent(calendarevent.id)}
            />
          ))}
          <View style={globalStyles.Buffer} />
        </ScrollView>
      </View>
    </View>
  );
}
