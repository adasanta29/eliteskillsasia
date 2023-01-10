import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import AdminTableForBookings from './components/timeSelector/bookings/AdminTableForBookings';
import TimeSelector from './components/timeSelector/bookings/TimeSelector';
import { db } from './firebaseConfig';

function AdminPage({allTimes}) {
  const [allBookings, setAllBookings] = useState([]);
  const [allBookingsOfSelectedDay, setAllBookingsOfSelectedDay] = useState([]);
  const [myBooking, setMyBooking] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [formVisible,setFormVisible] = useState(false);

  const bokingsCollection = collection(db,"bookings");


  const bookingAddedForTheUser = (bookingDay,bookingTime) =>{
    //start: '2022-12-12T10:30:00',
    //end: '2022-12-12T11:30:00',
    let details = {
      title: 'Your Booking',
      start: `${bookingDay}T${bookingTime}`,
      end: `${bookingDay}T${bookingTime}`,
      allDay: true,
      textColor:'#ffffff',
      backgroundColor:'#222222'
    }
    sessionStorage.setItem("userEvents",[...myBooking,details]);
    setMyBooking([...myBooking,details]);
    getAllBookings();
  }

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
            weekends={true}
            events={myBooking}
            selectable={true}
            editable={true}
            themeSystem = "bootstrap5"
            eventContent={renderEventContent}
            longPressDelay={200}
            // eventClick={(e) => {
            //   console.log(e);
            // }}
            select={(e) => {
              setSelectedDate(e.startStr);
            }}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth",
            }}
          />
        </div>
        <div className="timeSelectorContainer">
          <TimeSelector allBookingsOfSelectedDay={allBookingsOfSelectedDay} selectedDate={selectedDate} allTimes={allTimes} selectedTime={selectedTime} setSelectedTime={setSelectedTime} setFormVisible={setFormVisible} />
        </div>

      </div>
      <div className="adminTable">
        <AdminTableForBookings allBookingsOfSelectedDay={allBookingsOfSelectedDay} />
        </div>      
    </div>
  );
}

export default AdminPage;
