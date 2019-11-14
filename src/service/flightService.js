import { formatFlight, formatFlightList} from './flightFormatter';


export function getAllFlights() {
  return {
    headers: headers,
    data: flights
  }
}

export function getFilteredFlights(fromCity, toCity, departureDate, returnDate) {
  // as of now, startDate is just a String. To be improved later
  let filteredFlights = flights;

  if (fieldIsNotEmpty(fromCity)) {
    filteredFlights = filteredFlights.filter(flight => flight["from"] === fromCity);
  }
  if (fieldIsNotEmpty(toCity)) {
    filteredFlights = filteredFlights.filter(flight => flight.to === toCity);
  }
  if (fieldIsNotEmpty(departureDate)) {
    filteredFlights = filteredFlights.filter(flight => flight.departureDate === departureDate);
  }
  if (fieldIsNotEmpty(returnDate)) {
    filteredFlights = filteredFlights.filter(flight => flight.returnDate === returnDate);
  }

  formatFlightList(filteredFlights);

  
  return {
    headers: headers,
    data: filteredFlights
  }
}

export function getFlightById(id) {
  for (var i = 0; i < flights.length; i++) {
    if (flights[i]['id'] == id) {
      return formatFlight(flights[i]);
    }
  }
}

function fieldIsNotEmpty(field) {
  return typeof field !== "undefined" && field !== "";
}

const headers = [
  { text: 'From', value: 'from' },
  { text: 'To', value: 'to' },
  { text: 'Departure', value: 'departureDate' },
  { text: 'Return', value: 'returnDate' }
];

const flights = [
  {
    id: "001",
    from: 'Singapore',
    to: 'Jakarta',
    departureDate: '2019-09-17',
    returnDate: '2019-09-30',
    airline: "Garuda"
  },
  {
    id: "002",
    from: 'Singapore',
    to: 'Paris',
    departureDate: '2019-09-19',
    returnDate: '2019-10-19',
    airline: "Air France"
  },
  {
    id: "003",
    from: 'Jakarta',
    to: 'Paris',
    departureDate: '2019-10-18',
    returnDate: '2019-10-19',
    airline: "Singapore Airlines"
  }
]