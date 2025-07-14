export async function getFruits() {
  const fruits = [
    "Apple",
    "Banana", 
    "Orange",
    "Strawberry",
    "Mango"
  ];

  return {
    fruits,
    count: fruits.length
  };
}