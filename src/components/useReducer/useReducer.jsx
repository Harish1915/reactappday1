import { useReducer } from "react";
import { actionTypes, initialState, reducer } from "./reducerhelper";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure you have Bootstrap included

function UseReducer() {
  const [currentState, dispatchFunction] = useReducer(reducer, initialState);

  const bookedTicketHandler = () => {
    dispatchFunction({
      type: actionTypes.BOOK_TICKETS,
      payload: 10,
    });
  };
  const cancelTicketHandler = () => {
    dispatchFunction({
      type: actionTypes.CANCEL_TICKETS,
      payload: 2,
    });
  };
  const movieTicketHandler = () => {
    dispatchFunction({
      type: actionTypes.CHANGE_MOVIE,
      payload: "KALKI",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Ticket Booking System</h1>
        </div>
        <div className="card-body">
          <h2 className="card-title">Number of Total Tickets: {currentState.totalTickets}</h2>
          <h3 className="card-subtitle mb-2 text-muted">
            Number of Available Tickets: {currentState.currentAvailableTickets}
          </h3>
          <h4 className="card-text">Current Movie Name: {currentState.movieName}</h4>
          <button className="btn btn-primary me-2" onClick={bookedTicketHandler}>Book Ticket</button>
          <button className="btn btn-secondary me-2" onClick={cancelTicketHandler}>Cancel Ticket</button>
          <button className="btn btn-warning" onClick={movieTicketHandler}>Change Movie</button>
        </div>
      </div>
    </div>
  );
}

export default UseReducer;
