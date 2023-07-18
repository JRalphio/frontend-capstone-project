import "../index.css";
import React from "react";
const BookingForm = ({
  name,
  setName,
  eMail,
  setEMail,
  phoneNum,
  setPhoneNum,
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
  comments,
  setComments,
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
      name,
      eMail,
      phoneNum,
      resDate,
      resTime,
      resGuests,
      resOccasion,
      comments,
    };
    submitForm(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="booking_form">
        <h1>Book a table</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          required
          minLength={2}
          maxLength={50}
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          value={eMail}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEMail(e.target.value)}
        ></input>
        <label htmlFor="phonenum">Phone Number</label>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={phoneNum}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setPhoneNum(e.target.value)}
        ></input>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={resDate}
          required
          onChange={handleDateChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          required
          onChange={(e) => setResTime(e.target.value)}
        >
          <option value="">Select</option>
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
          required
          onChange={(e) => setResGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={resOccasion}
          optional
          onChange={(e) => setResOccasion(e.target.value)}
        >
          <option value="">Select</option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <label htmlFor="comments">Comments</label>
        <textarea
          id="comments"
          placeholder="Any special requests or comments?"
          value={comments}
          optional
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        <input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
};
export default BookingForm;
