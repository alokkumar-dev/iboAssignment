/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

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
  
  const getUniquePrducts = () => {
    const ansObj = {};
    for (var prod of listOfProducts) {
      if (prod.productName in ansObj) {
        ansObj[prod.productName].quantity += prod.quantity;
      } else {
        ansObj[prod.productName] = { ...prod };
      }
    }
    return Object.values(ansObj);
  };
  
  
  console.log(getUniquePrducts(listOfProducts));
  

  
  