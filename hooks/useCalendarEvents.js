import { useEffect, useState } from "react";
import { DentryStatus } from '../components/Dentry';
import * as FileSystem from 'expo-file-system';

const Uncompleted ={
    text: 'uncomplete',
    status: DentryStatus.notcomplete,
  };
const Completed = {
    text: 'complete',
    status: DentryStatus.complete,
  };
 
const initialEvents = (new Array(10)).fill('x').map((value, index) => {
    return{
        id: index + 1,
        ...Uncompleted,
        date: new Date(new Date().getTime()-(index*24*60*60*1000)),
        values: {},
    }
});

const fileName = FileSystem.documentDirectory + "calendarEvents.txt";

export default function useCalendarEvents() {
    const [calendarEvents, setCalendarEvents] = useState([]); 

    const completeCalendarEvent = async(id, values) =>{
        const updatedCalendarEvents = calendarEvents.map((calendarEvent) => {
            return {
                ...calendarEvent, 
                status: calendarEvent.id === id ? Completed.status: calendarEvent.status,
                text: calendarEvent.id === id ? Completed.text: calendarEvent.text,
                values: calendarEvent.id === id ? values: calendarEvent.values, 
            }
        });
        console.log(updatedCalendarEvents);
        await FileSystem.writeAsStringAsync(fileName, JSON.stringify(updatedCalendarEvents), { encoding: FileSystem.EncodingType.UTF8 });
        setCalendarEvents(updatedCalendarEvents);
    };

    useEffect(()=>{
        FileSystem.readAsStringAsync(fileName, { encoding: FileSystem.EncodingType.UTF8 }).then((value)=>{
        const eventsLoaded = JSON.parse(value).map((loadedEvent)=>{
            return {
                ...loadedEvent,
                date: new Date(loadedEvent.date)
            }
        });
        console.log(eventsLoaded);
        setCalendarEvents(eventsLoaded);
            
        }).catch(()=>{
            setCalendarEvents(initialEvents)
        })
    },[])
return[calendarEvents, completeCalendarEvent]
};
