let words = ["refer", "rotor", "level", "hello", "madam","length", "width"];
function firstPalindrome(words) {
  let palindrome = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reverseWord = word.split("").reverse().join("");
    if (word === reverseWord) {
      palindrome.push(word);
      console.log(`${palindrome[0]} is a palindrome`);
      break;
    } else {
      console.log(`${word} is not a palindrome`);
    }
  }
  return;
}
firstPalindrome(words);
