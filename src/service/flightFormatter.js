import moment from 'moment';

const FLIGHT_FORMAT = 'LL';

export function formatFlightList(flightList) {
  flightList.forEach( (flight) => { 
      formatFlight(flight);
  }  );
}

export function formatFlight(flight) {
  flight.departureDate = formatDate(flight.departureDate);
  flight.returnDate = formatDate(flight.returnDate);
  return flight;
}

function formatDate(date) {
  return moment(date).format(FLIGHT_FORMAT);
}