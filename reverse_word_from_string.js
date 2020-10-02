// How do you reverse words in a given sentence without using any library method?

const reverseSentence = (sentence) => {
    const result = [];
    sentence = sentence.split(' ');
    for(str of sentence){
      let reverse = ''
      for(let i=str.length -1; i>= 0; i--){
         reverse += str[i]
      }
      result.push(reverse);
    }
    return result;
};

const result = reverseSentence('hello bad boy');
console.log(result.join(' '))