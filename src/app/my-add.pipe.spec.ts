import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAddPipe();
    expect(pipe).toBeTruthy();
  });

  it('test addition of  numbers using pipes',()=>{
    const pipeObj= new MyAddPipe();
    var ret = pipeObj.transform(2,10);
    expect(ret).toBe(12);
  });
});
