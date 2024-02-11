//Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.



//Reference for Regular Expression (Regex) -> https://regexr.com/



//Flags - global , case insensitive ,multiline , single line(dotall) , unicode , sticky




let pattern = 'pw';

//Declaration of RegEx - Method 1

let regExOne = new RegExp(pattern);

let flag = 'gi';
let regExTwo = new RegExp(pattern , flag); //Method 2

let regExThree = /pw/gi ;

const strToCheck = 'pw is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent';

const result = regExThree.test(strToCheck);
console.log(result);     // true

const anotherResult = strToCheck.match(regExThree);
console.log(anotherResult);   //[ 'pw', 'pw', 'pw' ]

const oneMoreResult = strToCheck.replace(regExThree, 'p-w');
console.log(oneMoreResult);    //p-w is growing at a rapid speed and recently they are working on p-wskills to create skills based p-wcontent

const webUrl = "https://pwskills.com/anshu%20chaudhary";

const useableUrl = webUrl.replace(/%20/,'-');
console.log(useableUrl);   //https://pwskills.com/anshu-chaudhary

const useableUrl01 = webUrl.replace(/%\d0/,'-');
console.log(useableUrl01);  //https://pwskills.com/anshu-chaudhary

const useableUrl02 = webUrl.replace(/%\d\d/,'-');
console.log(useableUrl02);  //https://pwskills.com/anshu-chaudhary