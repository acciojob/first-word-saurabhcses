function firstWord(str) {
  // Trim the string and split by one or more whitespace characters
  const words = str.trim().split(/\s+/);
  // Return the first word or empty string if none exists
  return words[0] || '';
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
