/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [];

var obj1 = {
  quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  source: "Nelson Mandela",
  citation: "YourStory"
};
var obj2 = {
  quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  source: "Oprah Winfrey"
};
var obj3 = {
  quote: "Life is what happens when you're busy making other plans.",
  source: "John Lennon",
  citation: "Reader's Digest",
  year: "1957"
};
var obj4 = {
  quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  source: "Mother Teresa"
};
var obj5 = {
  quote: "Whoever is happy will make others happy too.",
  source: "Anne Frank"
};
var obj6 = {
  quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma -- which is living with the results of other people's thinking.",
  source: "Steve Jobs"
};

quotes.push(obj1);
quotes.push(obj2);
quotes.push(obj3);
quotes.push(obj4);
quotes.push(obj5);
quotes.push(obj6);


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  var i=Math.floor( Math.random() * quotes.length);
  console.log(i);
return quotes[i];
}


/***
 * `printQuote` function
***/

function printQuote() {

  // 1. Create a variable that calls the getRandomQuote()
 // function

    var randQuote=getRandomQuote();
    console.log(randQuote);

 // 2. Create a variable that initiates your HTML string with
 // the first two <p></p> elements, their classNames,
 // and the quote and source properties, but leave off
 // the second closing `</p>` tag for now

    var htmlString = `<p class="quote">${randQuote.quote}</p>`;
    htmlString = htmlString + `<p class ="source">${randQuote.source}`;

 // 3. Use an if statement to check if the citation property
 // exists, and if it does, concatenate a <span></span>
 // element, appropriate className, and citation property
 // to the HTML string

    if(randQuote.citation !== undefined) {
      htmlString += `<span class="citation">${randQuote.citation}</span>`; 
    }

 // 4. Use an if statement to check of the year property exists,
 // and if it does, concatenate a <span></span> element,
 // appropriate className, and year property to the HTML
 //string

    if(randQuote.year !== undefined) {
      htmlString += `<span class = "year">${randQuote.year}</span>`;
    }

 // 5. After the two if statements, concatenate the closing </p>
 // tag to the HTML string

    htmlString += `</p>`;

 // 6. set the innerHTML of the quote-box div to equal the
 // complete HTML string}

    document.getElementById("quote-box").innerHTML = htmlString;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);