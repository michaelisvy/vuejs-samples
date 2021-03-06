import {getFilteredFlights, getFlightById} from "../../src/service/flightService";

describe('tests for FlightService', () => {
    it('should get Singapore flights', () => {
        let filteredFlightList = getFilteredFlights("Singapore","","","");
        expect(filteredFlightList.data.length).toBe(2);
        filteredFlightList.data.forEach(flight => {
            expect(flight.from).toBe("Singapore");
        });
    });

    it('should get a flight by id', () => {
        let flight = getFlightById("001");
        expect(flight.departureDate).toBe("17/09/19");
    });
});