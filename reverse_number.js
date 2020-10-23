//Reverse a number.
const reverse = num => {
    let reverse = '';
    while(num > 0){
      let x = num % 10;
      num = Math.floor(num / 10);
      reverse += x;
    }
    return parseInt(reverse);
  };
  
  
  console.log(reverse(123456789))