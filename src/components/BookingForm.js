import "../index.css";
import React from "react";

const BookingForm = ({
  resDate,
  setResDate,
  resTime,
  setResTime,
  resGuests,
  setResGuests,
  resOccasion,
  setResOccasion,
  availableTimes,
  updateTimes,
  submitForm,
}) => {
  // updates the availableTimes when user selects a different date
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setResDate(selectedDate);
    updateTimes(new Date(selectedDate));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      resDate,
      resTime,
      resGuests,
      resOccasion,
    };
    submitForm(formData);
  };
  return (
    <div className="booking_form">
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <h1>Book a table</h1>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={resDate}
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          onChange={(e) => setResTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={resGuests}
          onChange={(e) => setResGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={resOccasion}
          onChange={(e) => setResOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};

export default BookingForm;
