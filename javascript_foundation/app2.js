/***************************************
 * JAVASCRIPT STRING METHODS – CHEATSHEET

 ***************************************/

/* ---------- 1. BASIC INFO ---------- */
let s = "JavaScript";

console.log(s.length);        // Total characters
console.log(s[0]);            // Access by index → 'J'
console.log(s.charAt(4));     // 'S'


/* ---------- 2. CASE CONVERSION ---------- */
console.log(s.toUpperCase()); // "JAVASCRIPT"
console.log(s.toLowerCase()); // "javascript"


/* ---------- 3. TRIMMING SPACES (VERY COMMON) ---------- */
let spaced = "   hello world   ";

console.log(spaced.trim());        // "hello world"
console.log(spaced.trimStart());   // "hello world   "
console.log(spaced.trimEnd());     // "   hello world"


/* ---------- 4. SEARCHING STRINGS ---------- */
let text = "I love JavaScript";

console.log(text.includes("love"));     // true
console.log(text.indexOf("Java"));      // 7
console.log(text.lastIndexOf("a"));     // last index of 'a'
console.log(text.startsWith("I"));      // true
console.log(text.endsWith("Script"));   // true


/* ---------- 5. EXTRACTING PARTS ---------- */
let lang = "JavaScript";

console.log(lang.slice(0, 4));    // "Java"
console.log(lang.slice(-6));      // "Script"
console.log(lang.substring(0,4)); // "Java" (no negative index)


/* ---------- 6. REPLACING ---------- */
let msg = "I love JS";

console.log(msg.replace("JS", "JavaScript")); // Replace first match
console.log("banana".replaceAll("a", "@"));  // Replace all


/* ---------- 7. SPLIT & JOIN (MOST IMPORTANT) ---------- */
let csv = "a,b,c";

let arr = csv.split(",");         // ["a","b","c"]
console.log(arr);

console.log(arr.join("-"));       // "a-b-c"


/* ---------- 8. REPEAT & PADDING ---------- */
console.log("Hi".repeat(3));      // "HiHiHi"

console.log("5".padStart(3,"0")); // "005"
console.log("5".padEnd(3,"0"));   // "500"


/* ---------- 9. CHARACTER CODES ---------- */
console.log("A".charCodeAt(0));       // 65
console.log(String.fromCharCode(65)); // "A"


/* ---------- 10. STRING COMPARISON ---------- */
console.log("a" === "a");  // true
console.log("a" > "b");    // false (lexicographical)


/* ---------- 11. TEMPLATE LITERALS (🔥 MUST KNOW) ---------- */
let name = "Sohom";
let age = 21;

console.log(`My name is ${name} and I am ${age} years old`);


/* ---------- 12. STRING → ARRAY → STRING (CLASSIC PATTERN) ---------- */
let word = "hello";

let reversed = word.split("").reverse().join("");
console.log(reversed); // "olleh"


/* ---------- 13. PALINDROME CHECK ---------- */
let p = "madam";

let isPalindrome = p === p.split("").reverse().join("");
console.log(isPalindrome); // true


/* ---------- 14. COUNT VOWELS ---------- */
let sentence = "JavaScript";

let vowels = sentence.match(/[aeiou]/gi);
console.log(vowels ? vowels.length : 0); // vowel count


/* ---------- 15. REMOVE EXTRA SPACES ---------- */
let messy = "  hello    world   ";

let cleaned = messy.trim().split(/\s+/).join(" ");
console.log(cleaned); // "hello world"


/* ---------- 16. TITLE CASE ---------- */
let title = "javaScript is awesome";

let titleCase = title
  .toLowerCase()
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(titleCase); // "Javascript Is Awesome"




