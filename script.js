function firstWord(s) {
  let s1 = "";
  //let started = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      s1 += s[i];
      //started = true;
    } else  {
      // If we already started the word and hit a space, break
      break;
    }
  }

  return s1 || '';
}
 
// Do not change the code below 

const s = prompt("Enter String:");
alert(firstWord(s));
