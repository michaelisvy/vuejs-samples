export function getAllFlights() {
  return {
    headers: headers,
    flights: flights
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
  return {
    headers: headers,
    flights: filteredFlights
  }
}

export function getFlightById(id) {
  for (var i = 0; i < flights.length; i++) {
    if (flights[i]['id'] == id) {
      return flights[i];
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
    departureDate: '17/09/19',
    returnDate: '30/09/19'
  },
  {
    id: "002",
    from: 'Singapore',
    to: 'Paris',
    departureDate: '18/09/19',
    returnDate: '09/10/19'
  },
  {
    id: "003",
    from: 'Jakarta',
    to: 'Paris',
    departureDate: '18/10/19',
    returnDate: '09/10/19'
  }
]