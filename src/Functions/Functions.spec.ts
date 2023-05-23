import { CountCapital } from "./Functions";
import { CheckPassword } from "./Functions";
import { ArrayAddition } from "./Functions";

//write test suite
describe('Test suite for functions',()=>{
    //test case to count capital letters
    it('should count the capital letters from string',()=>{
    const ret = CountCapital("Tanvi Jangda");
    expect(ret).toBe(2);
    });

    it('should add the elements in array',()=>{
    const ret=ArrayAddition([1,2,3,4,5,0]);
    expect(ret).toBe(15);
    });

    it('should check the valid password',()=>{
    const ret=CheckPassword("TanviJ@1995");
    expect(ret).toBe(true);
    });

    it('should check invalid password',()=>{
        const ret= CheckPassword("Weakpassword");
        expect(ret).toBe(false);
    });
});