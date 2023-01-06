import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import Backdrop from '@mui/material/Backdrop';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import TimeSelector from './TimeSelector';
import { db } from './firebaseConfig';

function VisitorsPage({allTimes}) {
  const [allBookings, setAllBookings] = useState([]);
  const [allBookingsOfSelectedDay, setAllBookingsOfSelectedDay] = useState([]);
  const cachedEvents = sessionStorage.getItem("userBookings");
  const [myBooking, setMyBooking] = useState(cachedEvents?JSON.parse(cachedEvents):[]);
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
    sessionStorage.setItem("userBookings",JSON.stringify([...myBooking,details]));
    setMyBooking([...myBooking,details]);
    getAllBookings();
  }

  const getAllBookings = async () => {    
    const res = await getDocs(bokingsCollection);
    let receivedBookings = res.docs.map((u)=>({...u.data(),id:u.id}));
    setAllBookings(receivedBookings);

    console.log(receivedBookings);
  }

  const getAllBookingsOfTheSelectedDate = () =>{
    let allBookingsOfDay = [];
    for (let i = 0; i < allBookings.length; i++) {
      const element = allBookings[i];
      if(element.date === selectedDate){
        allBookingsOfDay.push(element);
      }
    }
    console.log(allBookingsOfDay);
    return allBookingsOfDay;
  }
  useEffect(() => {
    console.log(selectedDate);
    console.log(">>>>>>");
    console.log(JSON.parse(sessionStorage.getItem("userBookings")));
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
            events={myBooking || []}
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
            selectLongPressDelay={0}
            eventLongPressDelay={0}
            longPressDelay={0}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridDay,dayGridWeek,dayGridMonth",
            }}
          />
        </div>
        <div className="timeSelectorContainer">
          <TimeSelector allBookingsOfSelectedDay={allBookingsOfSelectedDay} selectedDate={selectedDate} allTimes={allTimes} selectedTime={selectedTime} setSelectedTime={setSelectedTime} setFormVisible={setFormVisible} />
        </div>
      </div>
      <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={formVisible}
        >
          <BookingForm bookingAddedForTheUser={bookingAddedForTheUser} selectedDate={selectedDate} selectedTime={selectedTime} setFormVisible={setFormVisible} />
        </Backdrop>
      </div>
    </div>
  );
}

export default VisitorsPage;
