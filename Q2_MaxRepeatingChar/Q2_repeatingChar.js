

function longestRepetition (str) {
    if (str.length === 0) {
       return ['', 0]
    }
    let longest = '';
    let chunk = '';
    for (let i = 0; i < str.length; i++) {
      if (i === 0) {
        if (str[i] === str[i + 1]) {
          chunk += str[i];
        }
      }
      if (i > 0) {
        if (str[i] === str[i - 1]) {
          chunk += str[i];

        }
        if (str[i] !== str[i - 1]) {
          chunk = str[i];
        }
        if (chunk.length > longest.length) {
          longest = chunk;

        }
      }
    }

    var result = '';

    for(var i = 0; i < longest.length; i+=1){
        
        result += longest[0]

    }

    return result;
  }

console.log(longestRepetition('aanyyeeeddk'));
console.log(longestRepetition('btyyrjp'));

