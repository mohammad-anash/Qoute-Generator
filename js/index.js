const quoteEl = document.querySelector(".quote");
const previousEl = document.querySelector(".previous");
const nextEl = document.querySelector(".next");
const authorEl = document.querySelector(".auther");

const Qoutes = [
  "In the middle of difficulty lies opportunity.",
  "Believe you can and you're halfway there.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];
const authers = [
  "Albert Einstein",
  "Theodore Roosevelt",
  "Franklin D. Roosevelt",
  "Winston Churchill",
];

let increaseCounter = 0;
function generateRandomQuote() {
  const increaseCounterValue = increaseCounter++;
  quoteEl.innerText = Qoutes[increaseCounterValue];
  authorEl.innerText = authers[increaseCounterValue];
  if (increaseCounter >= 4) {
    increaseCounter = 0;
  }
}

nextEl.addEventListener("click", generateRandomQuote);

let decreaseCounter = Qoutes.length - 1;

function previoussRandomQuote() {
  const decreaseCounterValue = decreaseCounter--;
  quoteEl.innerText = Qoutes[decreaseCounterValue];
  authorEl.innerText = authers[decreaseCounterValue];

  console.log(decreaseCounterValue);
  if (decreaseCounter < 0) {
    decreaseCounter = Qoutes.length - 1;
  }
}

previousEl.addEventListener("click", previoussRandomQuote);
