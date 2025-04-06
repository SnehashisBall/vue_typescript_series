// console.log("Hello, World!");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

class Article1 {
    // constructor(){
    // }
    foo() {
        return " This is foo";
    }
    bar() {
        return "This is bar";
    }
}

const obj = new Article1();
console.log(obj.foo());
console.log(obj.bar());

const Article = {
    author: "Miyawakai",
    generateGhibli() {
        return "Started generating ghibli";
    },
};


console.log(Article.author);
console.log(Article.generateGhibli());
Article.publishedDate = new Date();
Article.publishedDate.toJSON();

const hours = Article.publishedDate.getUTCHours();
const minutes = Article.publishedDate.getMinutes();
const seconds = Article.publishedDate.getSeconds();


console.log("UTC Date:", Article.publishedDate.toUTCString());

console.log("Hours :", hours);
console.log("Minutes :", minutes);
console.log("Seconds ", seconds);

// Article.publishedDate.setHours( hours, minutes , seconds );


console.log("Local  Time:", Article.publishedDate.toLocaleString());

// gettign date and time using dayjs

const now = dayjs();
const nowUTC = now.utc();

console.log("Current Date and Time  :", now.format());
console.log("Current Date and Time in UTC   :", nowUTC.format());

console.log("Current Date and Time in Locale  :", now.locale());

const nowInKolkata = now.tz("Asia/Kolkata");
console.log("Current Date and Time  in Asia TimeZone :", nowInKolkata.format());