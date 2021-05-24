
//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function recurringCharacter(array){

  if(!array)
    return undefined;

  for(let i =0; i < array.length; i++){
    for(let j = i + 1; j< array.length; j++){
      if(array[i]===array[j])
        return array[i];
    }
  }
  return undefined;
}

function recurringCharacter2(array){
  
  if(!array){
    return undefined;
  }
  const container = new Map();

  for(let i =0; i < array.length; i++){
    if(!container.get(array[i])){
      container.set(array[i], array[i]);
    }else{
      return array[i];
    }
  }
  return undefined;
}

//const array = [2,5,1,2,3,5,1,2,4];
//const array = [2,1,1,2,3,5,1,2,4];
//const array = 1,2;
//Nice approach
//recurringCharacter(array);
//Best approach
recurringCharacter2(array);
