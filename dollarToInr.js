const items = {
    "T-shirt": 25,
    "Sneakers": 50,
    "Caps": 75,
    "Shorts": 100
  };
  
  const exchangeRate = 80; // 1 USD = 80 INR
  
  const convertedPrices = Object.keys(items).map((key) => {
    return {
      [key]: items[key] * exchangeRate
    };
  });
  
  console.log(convertedPrices);
  