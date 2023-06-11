// Good Luck 💪🏾
/*
    ## Count characters in string

##### Your Task 📚:

Create a function called `count` that takes two strings as arguments and returns the
number of times the first string (the single character) is found in the second string.

##### Examples 😃:

```
count("a", "fikrcamp") ➞ 1
count("c", "bootcamp") ➞ 1
count("o", "fikrcamp coding bootcamp") ➞ 3
```

Good Luck 😀
*/

function count(letter, words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === letter) {
      count++;
    }
  }

  return count;
}

console.log(count("c", "bootcamp"));
