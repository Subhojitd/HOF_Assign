const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
const url1 = "https://www.linkedin.com/in/sundar-pichai_123";
const url2 = "https://www.linkedin.com/in/satya_nadela";
const url3 = "https://www.linkedin.com/in/elon-musk12345";

if (regex.test(url1)) {
  console.log(`${url1} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url1} is not a valid LinkedIn profile URL`);
}

if (regex.test(url2)) {
  console.log(`${url2} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url2} is not a valid LinkedIn profile URL`);
}

if (regex.test(url3)) {
  console.log(`${url3} is a valid LinkedIn profile URL`);
} else {
  console.log(`${url3} is not a valid LinkedIn profile URL`);
}
