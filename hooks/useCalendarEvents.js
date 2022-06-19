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



export default function useCalendarEvents() {
    const [calendarEvents, setCalendarEvents] = useState([
        {id: 1,
        ...Uncompleted, 
        date: new Date(2022, 10, 17),},

        {id: 2,
        ...Uncompleted, 
        date: new Date(2022, 7, 14),},

        {id: 3,
            ...Uncompleted, 
            date: new Date(2022, 7, 14),}
    ]); 
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
