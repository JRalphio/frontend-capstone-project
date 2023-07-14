import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../bookingsAPI";

const BookingPage = () => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [resGuests, setResGuests] = useState("");
  const [resOccasion, setResOccasion] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // New state to track form submission

  const timesReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return action.times;
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    const date = new Date();
    return fetchAPI(date);
  };

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  const updateTimes = (date) => {
    const updatedTimes = fetchAPI(date);
    dispatchAvailableTimes({ type: "UPDATE_TIMES", times: updatedTimes });
  };

  const handleSubmit = (formData) => {
    const success = submitAPI(formData); // Call the submitAPI function and store the return value
    if (success) {
      setFormSubmitted(true); // Set the formSubmitted state to true if submitAPI returns true
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (formSubmitted) {
      navigate("/confirmation");
    }
  }, [formSubmitted, navigate]);

  return (
    <div className="booking_form">
      {!formSubmitted ? ( // Conditionally render the BookingForm or ConfirmedBooking component
        <BookingForm
          resDate={resDate}
          setResDate={setResDate}
          resTime={resTime}
          setResTime={setResTime}
          resGuests={resGuests}
          setResGuests={setResGuests}
          resOccasion={resOccasion}
          setResOccasion={setResOccasion}
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          submitForm={handleSubmit} // Pass the handleSubmit function as a prop
        />
      ) : (
        <ConfirmedBooking />
      )}
    </div>
  );
};

export default BookingPage;
