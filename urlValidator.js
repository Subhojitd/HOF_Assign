const regex = /^(http:\/\/|https:\/\/)[\w\d\S]+\.[a-zA-Z]+$/;
const url1 = "http://www.google.com";
const url2 = "https://www.facebook.com";
const url3 = "ftp://www.twitter.com";

if (regex.test(url1)) {
  console.log(`${url1} is a valid URL`);
} else {
  console.log(`${url1} is not a valid URL`);
}

if (regex.test(url2)) {
  console.log(`${url2} is a valid URL`);
} else {
  console.log(`${url2} is not a valid URL`);
}

if (regex.test(url3)) {
  console.log(`${url3} is a valid URL`);
} else {
  console.log(`${url3} is not a valid URL`);
}
