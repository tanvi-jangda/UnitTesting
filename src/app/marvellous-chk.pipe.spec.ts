import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('create an instance', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe).toBeTruthy();
  });

  it('should check if number is even',()=>
  {
    let pipeObj=new MarvellousChkPipe();
    var ret = pipeObj.transform(6,'Even');
    expect(ret).toBe("It is Even");
  });

  it('should check if number is not even',()=>
  {
    let pipeObj=new MarvellousChkPipe();
    var ret = pipeObj.transform(7,'Even');
    expect(ret).toBe("It is not Even");
  });

  it('should check if number is odd',()=>{
    let pipeObj=new MarvellousChkPipe();
    var ret= pipeObj.transform(3,'Odd');
    expect(ret).toBe("It is Odd");
  });

  it('should check if number is not odd',()=>{
    let pipeObj=new MarvellousChkPipe();
    var ret= pipeObj.transform(4,'Odd');
    expect(ret).toBe("It is not Odd");
  });

  it('should check if number is prime',()=>{
    let pipeObj=new MarvellousChkPipe();
    var ret=pipeObj.transform(5,'Prime');
    expect(ret).toBe("It is a prime number")
  });

  it('should check if number is not prime',()=>{
    let pipeObj=new MarvellousChkPipe();
    var ret=pipeObj.transform(8,'Prime');
    expect(ret).toBe("It is a not prime number")
  });

  it('should check if number is perfect number',()=>{
  let pipeObj=new MarvellousChkPipe();
  var ret= pipeObj.transform(28,'Perfect');
  expect(ret).toBe("It is a perfect number.");
  });

  it('should check if number is not perfect number',()=>{
    let pipeObj=new MarvellousChkPipe();
    var ret= pipeObj.transform(7,'Perfect');
    expect(ret).toBe("It is not a perfect number.");
    });
});
