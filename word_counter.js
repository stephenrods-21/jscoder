const replaceSpecialCharacters = str => {
    var specialChars = '!@#$^&%*()+=-[]/{}|:<>?,.';
    for (var i = 0; i < specialChars.length; i++) {
      str = str.replace(
        new RegExp('\\' + specialChars[i], 'gi'),
        ''
      );
    }
    return str;
  };
  
  const countWords = (str) => {
    let wordCount = {};
    let words = str.split(' ');
    for(let word of words){
      if(word != ""){
        if(word in wordCount){
          wordCount[word] += 1;
        }else{
          wordCount[word] = 1;
        }
      }
    }
    console.log(wordCount);
  };
  
  // Main call
  let str = replaceSpecialCharacters('Jack & Jill went up the Hill!, Jill came down Jack went up.');
  countWords(str);
  
  
  
  
  