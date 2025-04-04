function solution(my_string) {
  const getCharIndex = (char) => {
    const charCode = char.charCodeAt(0);
    //아스키코드?
    if (/[a-z]/.test(char)) {
      return charCode - 97 + 26;
    }
    return charCode - 65;
  };

  const arr = new Array(52).fill(0);
  for (const char of my_string) {
    arr[getCharIndex(char)] += 1;
  }
  return arr;
}
