let delayInSeconds = 5; // delay in seconds
let remainingTime = delayInSeconds; // initialize remaining time to delay

let countdown = setInterval(() => {
  remainingTime--;
  console.log(`${remainingTime} seconds remaining...`);
  if (remainingTime <= 0) {
    clearInterval(countdown);
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Random number generated: ${randomNumber}`);
  }
}, 1000); // countdown interval is every second (1000 milliseconds)

setTimeout(() => {
  clearInterval(countdown);
}, delayInSeconds * 1000); // stop the countdown after the specified delay in seconds
