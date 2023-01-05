import React, { useEffect, useState } from 'react';
import TimeElement from './TimeElement';

const getInitialValuesForBookingsInTime = (allTimes) =>{
    var times = [];
    for (let i = 0; i < allTimes.length; i++) {
        let ob = {};
        ob.time = allTimes[i].value;
        ob.numBookings = 0;
        times.push(ob);
    }
    return times;
}
function TimeSelector({selectedDate,allTimes,selectedTime,setSelectedTime,setFormVisible,allBookingsOfSelectedDay}) {
    const [bookingsInTime, setBookingsInTime] = useState(getInitialValuesForBookingsInTime(allTimes));
    
    const filterAllBookingsByTime = () =>{
        var bookingsInTimeCopy = [...bookingsInTime];
        for (let i = 0; i < bookingsInTimeCopy.length; i++) {
            bookingsInTimeCopy[i].numBookings = 0;
        }

        for (let i = 0; i < allBookingsOfSelectedDay.length; i++) {
            var el = allBookingsOfSelectedDay[i];
            var index = getIndexFromTimeValue(el.time.value);
            if(bookingsInTimeCopy[index]){
                bookingsInTimeCopy[index].numBookings = bookingsInTimeCopy[index].numBookings+1;
            }
        }
        setBookingsInTime(bookingsInTimeCopy);
    }

    const getIndexFromTimeValue = (val) =>{
        for (let i = 0; i < allTimes.length; i++) {
            if(allTimes[i].value === val){
                return i;
            }
        }
        return 0;
    }

    useEffect(() => {
        filterAllBookingsByTime();
    }, [allBookingsOfSelectedDay])

    
  return (
    <div>
        <div className="timeSelector">
            <div className="selectedDataArea">
                <div>{selectedDate ? selectedDate : <>Please Select Date</>}</div>
                <div>{selectedTime ? selectedTime.text : <>Please select the time</>}</div>
            </div>
          
          {selectedDate && 
            <div className="allTimes">
                {allTimes.map((time, index) => (
                <TimeElement
                    key={index}
                    time={time}
                    selectedTime={selectedTime}
                    numBookings={bookingsInTime[index]}
                    setSelectedTime = {setSelectedTime}
                    setFormVisible = {setFormVisible}
                />
                ))}
          </div>}

          {!selectedDate && <div className="selectDateFirst">
            <h1>Please select a date</h1>
          </div>}
        </div>
    </div>
  )
}

export default TimeSelector