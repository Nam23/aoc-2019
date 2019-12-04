var findPassword = ()=>{
let count=0;
for(let i=372037;i<905159;i++){
  let s=''+i;
  //For part 2
  let double=new Map();
  let doubleCount=0;

  let array=s.split("");
  let invalid=0;
  let valueSame=0;
  for(let j=0;j<5;j++){
    if(array[j]>array[j+1]){
      invalid++;
    }
    else if(array[j]==array[j+1]){
      valueSame++;
      //For part 2
      if(double.has(array[j])){
        let value=double.get(array[j])+1;
        double.set(array[j],value);
      }
      else{ 
        double.set(array[j],2);
      }
    }
    else{
      continue;
    }
    
  }
  //For part 2
  for(let v of double.values()){
    if(v==2){
    doubleCount++;
    }
  }
  if(invalid==0 && valueSame!=0 && doubleCount!=0){
  count++;
  
  }
}

return count;
}
console.log(findPassword());
