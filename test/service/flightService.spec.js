import {getFilteredFlights} from "../../src/service/flightService";

describe('tests for FlightService', () => {
    it('should get Singapore flights', () => {
        let filteredFlightList = getFilteredFlights("Singapore","","","");
        expect(filteredFlightList.flights.length).toBe(2);
        filteredFlightList.flights.forEach(flight => {
            expect(flight.from).toBe("Singapore");
        });
    });
});