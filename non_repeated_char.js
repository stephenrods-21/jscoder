//How do you print the first non-repeated character from a string?
const getNonRepeatedCharacters = (str) => {
  str = str.toLowerCase().replace(/\s/ig, '')
  const noRepeatChars = []
  const obj = {}
  for(ch of str){
    if(ch in obj){
      obj[ch] += 1; 
    }else{
      obj[ch] = 1;
    }
  }
  for(key in obj){
    if(obj[key] === 1){
      noRepeatChars.push(key)
    }
  }
    return noRepeatChars;
};

const result = getNonRepeatedCharacters('abBcddeffsd sds sdsoppo');
console.log(result)