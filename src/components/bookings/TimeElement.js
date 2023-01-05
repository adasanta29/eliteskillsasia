import React from 'react';
import { NUMBER_OF_BOOKINGS_GREEN, NUMBER_OF_BOOKINGS_ORANGE, NUMBER_OF_BOOKINGS_RED } from './Constants';
import './timeSelector.css';

const getStyleObjectBasedOnNumberOfBookings = (numBookings,isSelected) =>{
  if(isSelected){
    return {backgroundColor:"#222222"};
  }

  if(numBookings>NUMBER_OF_BOOKINGS_RED){
    return {backgroundColor:"rgba(255,255,255,0.4)",color:"rgba(0,0,0,0.5)",cursor:"not-allowed"};
  }
  
  if(numBookings<=NUMBER_OF_BOOKINGS_RED && numBookings>NUMBER_OF_BOOKINGS_ORANGE){
    return {backgroundColor:"red"};
  }

  if(numBookings<=NUMBER_OF_BOOKINGS_ORANGE && numBookings>NUMBER_OF_BOOKINGS_GREEN){
    return {backgroundColor:"orange"};
  }

  if(numBookings<=NUMBER_OF_BOOKINGS_GREEN){
    return {backgroundColor:"green"};
  }
  
  return {};
}
function TimeElement({ time,selectedTime,setSelectedTime,setFormVisible,numBookings }) {
  const isSelected = time && selectedTime && time.value === selectedTime.value;
  var backgroundCss = getStyleObjectBasedOnNumberOfBookings(numBookings.numBookings,isSelected);
  
  return (
    <div
      className="timeContainer"
      style={backgroundCss}
      onClick={
        ()=>{
          setSelectedTime(time);
          setFormVisible(true);
        }
      }
    >
      <div className="timeText">{time.text}</div>
    </div>
  );
}

export default TimeElement;
