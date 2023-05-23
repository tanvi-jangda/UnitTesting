import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, param:string): unknown {
    var returnString : string="";
    switch(param)
    {
     case "Even":{
       if(value % 2 == 0)
       returnString="It is Even";
       else
       returnString="It is not Even";
       break;
     }
     case "Odd":{  
       if(value % 2 != 0)
       returnString = "It is Odd";
       else
       returnString = "It is not Odd";
       break;
     }
     case "Prime":{
       returnString =  this.is_Prime(value);
       break;
     }
     case "Perfect":{
       returnString = this.is_perfect(value);
       break;
     }
    }
     return returnString;
   }
 
 is_perfect(inpNum:number):string
 {
 var temp = 0;
    for(var i=1; i<=inpNum/2; i++)
      {
          if(inpNum % i === 0)
           {
             temp += i;
           }
      }
    
      if(temp === inpNum && temp !== 0)
         {
       return "It is a perfect number.";
         } 
      else
         {
       return "It is not a perfect number.";
         }   
  } 
 
 
  is_Prime(inpNum:number):string{
   let isPrime = true;
     for (let i = 2; i < inpNum; i++) {
         if (inpNum % i == 0) {
             isPrime = false;
             break;
         }
     }
 
     if (isPrime) {
        return "It is a prime number" ;
     } else {
       return "It is a not prime number";
     }
 }

}
