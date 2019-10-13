import * as customerService from "../../src/service/customerService";

describe('tests for PersonalInfoService', () => {
    it('should get customer info', () => {
        let customerList = customerService.getCustomerList();
        expect(customerList.data.length).toBe(4);
        expect(customerList.data[0].firstName).toBe("John");
    });

    it('should delete one item', () => {
        let customerList = customerService.getCustomerList();
        expect(customerList.data.length).toBe(4);
        customerService.deleteById("001");
        expect(customerList.data.length).toBe(3);
    });
});