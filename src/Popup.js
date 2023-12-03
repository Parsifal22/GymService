import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Popup.css';

const Popup = ({ onClose }) => {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Select a Date</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
        />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;