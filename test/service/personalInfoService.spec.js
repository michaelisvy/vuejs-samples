import {getPersonalInfo} from "../../src/service/personalInfoService";

describe('tests for PersonalInfoService', () => {
    it('should get personal info', () => {
        let personalInfoList = getPersonalInfo();
        expect(personalInfoList.personalInfo.length).toBe(4);
        expect(personalInfoList.personalInfo[0].firstName).toBe("John");
    });
});