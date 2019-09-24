export function getAllFlights() {
  return {
    headers: headers,
    flights: flights
  }
}

export function getFilteredFlights(fromCity, toCity, departureDate, returnDate) {
  // as of now, startDate is just a String. To be improved later
  let filteredFlights = flights;
  
  if (fromCity !== "") {
    filteredFlights = filteredFlights.filter(flight => flight["from"] === fromCity);
  }
  if (toCity !== "") {
    filteredFlights = filteredFlights.filter(flight => flight.to === toCity);
  }
  if (typeof departureDate !== "undefined" && departureDate !== "") {
    filteredFlights = filteredFlights.filter(flight => flight.departureDate === departureDate);
  }
  if (typeof returnDate !== "undefined" && returnDate !== "") {
    filteredFlights = filteredFlights.filter(flight => flight.returnDate === returnDate);
  }
  return {
    headers: headers,
    flights: filteredFlights
  }
}

const headers = [
  { text: 'From', value: 'from' },
  { text: 'To', value: 'to' },
  { text: 'Departure', value: 'departureDate' },
  { text: 'Return', value: 'returnDate' }
];

const flights = [
  {
    from: 'Singapore',
    to: 'Jakarta',
    departureDate: '17/09/19',
    returnDate: '30/09/19'
  },
  {
    from: 'Singapore',
    to: 'Paris',
    departureDate: '18/09/19',
    returnDate: '09/10/19'
  },
  {
    from: 'Jakarta',
    to: 'Paris',
    departureDate: '18/10/19',
    returnDate: '09/10/19'
  }
]