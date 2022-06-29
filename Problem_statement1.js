/*
You have been given a list of products which is having property productName, quantity and description.
PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}                     */
const listOfProducts = [
    {
      productName: "TV",
      quantity: 10,
      description: "television",
    },
    {
      productName: "AC",
      quantity: 5,
      description: "air conditioner",
    },
    {
      productName: "TV",
      quantity: 10,
      description: "television",
    },
    {
      productName: "AC",
      quantity: 5,
      description: "air conditioner",
    },
    {
      productName: "FAN",
      quantity: 10,
      description: "Ceiling Fan",
    },
  ];
  
  const getUniqueProductCount = () => {
    let ansObj = {};
    for (let i = 0; i < listOfProducts.length; i++) {
      if (ansObj[listOfProducts[i].productName] == undefined) {
        ansObj[listOfProducts[i].productName] = 1;
      } else {
        ansObj[listOfProducts[i].productName]++;
      }
    }
    return ansObj;
  };
  console.log(getUniqueProductCount(listOfProducts));
  