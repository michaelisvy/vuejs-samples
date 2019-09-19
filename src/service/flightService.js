export function getFlightInfo() {
    return {
        headers: [
          { text: 'From',value: 'from' },
          { text: 'To', value: 'to' },
          { text: 'Departure', value: 'departure' },
          { text: 'Return', value: 'return' }
        ],
        flights: [
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
          
        ],
      }
}