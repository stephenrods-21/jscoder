// Reverse a sentence.
const reverseSentence = sentence => {
    let words = sentence.split(' ');
    let reverse = [];
    let j = 0;
    for(let i=words.length; i >= 0; i--){
      reverse[j++] = words[i];
    }
    return reverse.join(' ');
  };
  
  console.log(reverseSentence('Hello World!! hj kkh'))
  