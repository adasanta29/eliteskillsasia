import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import AdminTableForBookings from '../../components/bookings/AdminTableForBookings';
import TimeSelector from '../../components/bookings/TimeSelector';
import { db } from '../../components/bookings/firebaseConfig'

function AdminPage({allTimes}) {
  const [allBookings, setAllBookings] = useState([]);
  const [allBookingsOfSelectedDay, setAllBookingsOfSelectedDay] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);

  const bokingsCollection = collection(db,"bookings");

  const getAllBookings = async () => {    
    const res = await getDocs(bokingsCollection);
    let receivedBookings = res.docs.map((u)=>({...u.data(),id:u.id}));
    setAllBookings(receivedBookings);
  }

  const getAllBookingsOfTheSelectedDate = () =>{
    let allBookingsOfDay = [];
    for (let i = 0; i < allBookings.length; i++) {
      const element = allBookings[i];
      if(element.date === selectedDate){
        allBookingsOfDay.push(element);
      }
    }
    return allBookingsOfDay;
  }
  useEffect(() => {
    setAllBookingsOfSelectedDay(getAllBookingsOfTheSelectedDate());
  }, [selectedDate])
  
  useEffect(() => {
      getAllBookings();
  }, [])

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <div>
      <div className="calendarWithTime">
        <div className="visitorCalendar">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            weekends={false}
            selectable={true}
            editable={true}
            themeSystem = "bootstrap5"
            eventContent={renderEventContent}
            // eventClick={(e) => {
            //   console.log(e);
            // }}
            select={(e) => {
              setSelectedDate(e.startStr);
            }}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridDay,dayGridWeek,dayGridMonth",
            }}
          />
        </div>
        <div className="timeSelectorContainer">
          <TimeSelector allBookingsOfSelectedDay={allBookingsOfSelectedDay} selectedDate={selectedDate} allTimes={allTimes} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
        </div>

      </div>
      <div className="adminTable">
        <AdminTableForBookings allBookingsOfSelectedDay={allBookingsOfSelectedDay} />
        </div>      
    </div>
  );
}

export default AdminPage;
