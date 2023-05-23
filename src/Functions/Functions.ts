
export function CountCapital(myString:string)
{
  var count=0,len=myString.length;
  for(var i=0;i<len;i++) {
    if(/[A-Z]/.test(myString.charAt(i))) 
    count++;
  }
  return count;
}

export function ArrayAddition(myArray:number[])
{
  var count=0;
  for (let i=0; i<myArray.length;i++)
  {
  count= count + myArray[i];
  }
  return count;
}

export function CheckPassword(myPassword:string)
{
  if(/^(?=(?:\D*\d){2})(?=(?:[^a-z]*[a-z]){3})(?=[^A-Z]*[A-Z]){2}(?=(?:\w*\W)).*/.test(myPassword))
  return true;
  else
  return false;
}