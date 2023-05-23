import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return multiplicaton of 2 numbers using pipe',()=>
  {
    var pipeObj=new MyMultPipe();
    var ret = pipeObj.transform(10,20);
    expect(ret).toBe(200);
  });
});
