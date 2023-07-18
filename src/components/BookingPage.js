import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../bookingsAPI";

const BookingPage = () => {
  const [name, setName] = useState("");
  const [eMail, setEMail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [resGuests, setResGuests] = useState("");
  const [resOccasion, setResOccasion] = useState("");
  const [comments, setComments] = useState("");
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

  // useNavigate() is used here in order to navigate to the confirmation page once the form is submitted

  const navigate = useNavigate();

  useEffect(() => {
    if (formSubmitted) {
      navigate("/confirmation");
    }
  }, [formSubmitted, navigate]);

  return (
    <div className="booking_page">
      <BookingForm
        eMail={eMail}
        setEMail={setEMail}
        phoneNum={phoneNum}
        setPhoneNum={setPhoneNum}
        name={name}
        setName={setName}
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
        comments={comments}
        setComments={setComments}
        submitForm={handleSubmit} // Pass the handleSubmit function as a prop
      />
    </div>
  );
};

export default BookingPage;
