export function getAllFlights() {
  return {
    headers: headers,
    flights: flights
  }
}

export function getFilteredFlights(fromCity, toCity) {
  console.log("hello");
  let filteredFlights = flights;
  
  if (fromCity !== "") {
    filteredFlights = filteredFlights.filter(flight => flight.from === fromCity);
  }
  if (toCity !== "") {
    filteredFlights = filteredFlights.filter(flight => flight.to === toCity);
  }
  return {
    headers: headers,
    flights: filteredFlights
  }
}

const headers = [
  { text: 'From', value: 'from' },
  { text: 'To', value: 'to' },
  { text: 'Departure', value: 'departure' },
  { text: 'Return', value: 'return' }
];

const flights = [
  {
    from: 'Singapore',
    to: 'Jakarta',
    departure: '17/09/19',
    return: '30/09/19'
  },
  {
    from: 'Singapore',
    to: 'Paris',
    departure: '18/09/19',
    return: '09/10/19'
  },
  {
    from: 'Jakarta',
    to: 'Paris',
    departure: '18/10/19',
    return: '09/10/19'
  }
]