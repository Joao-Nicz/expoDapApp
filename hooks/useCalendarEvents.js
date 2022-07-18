import { useState } from "react";
import { DentryStatus } from '../components/dentry';

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
        date: new Date(new Date().getTime()-(index*24*60*60*1000))
    }
})

export default function useCalendarEvents() {
    console.log(initialEvents)
    const [calendarEvents, setCalendarEvents] = useState(initialEvents); 

    const completeCalendarEvent = (id) =>{
        const updatedCalendarEvents = calendarEvents.map((calendarEvent) => {
            return {
                ...calendarEvent, 
                status: calendarEvent.id === id ? Completed.status: calendarEvent.status,
                text: calendarEvent.id === id ? Completed.text: calendarEvent.text
            }
        });
        setCalendarEvents(updatedCalendarEvents);
    };
return[calendarEvents, completeCalendarEvent]
};
