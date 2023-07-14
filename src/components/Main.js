import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CallToAction from "./CallToAction";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import Specials from "./Specials";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/about" element={<CallToAction />} />

      <Route path="/menu" element={<Specials />} />
      <Route path="/confirmation" element={<ConfirmedBooking />} />

      <Route path="/reservations" element={<BookingPage />} />

      <Route path="/order" element={<Homepage />} />
      <Route path="/login" element={<Homepage />} />
    </Routes>
  );
}
