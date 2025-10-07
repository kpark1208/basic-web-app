export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "hyeonjap";
  }

  if (query.toLowerCase().includes("id")) {
    return "hyeonjap";
  }

  // Handle "largest number" queries
  if (query.toLowerCase().includes("largest") && query.toLowerCase().includes("number")) {
    // Extract numbers from the query using regex
    const numbers = query.match(/\d+/g);
    
    if (numbers && numbers.length > 0) {
      // Convert string numbers to integers
      const numArray = numbers.map(num => parseInt(num, 10));
      
      // Find the largest number
      const largest = Math.max(...numArray);
      
      return `${largest}`;
    }
  }

  // Handle arithmetic queries like "What is X plus Y?"
  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    // Extract numbers from the query using regex
    const numbers = query.match(/\d+/g);
    
    if (numbers && numbers.length >= 2) {
      // Convert string numbers to integers
      const num1 = parseInt(numbers[0], 10);
      const num2 = parseInt(numbers[1], 10);
      
      // Calculate the sum
      const result = num1 + num2;
      
      return `${result}`;
    }
  }

  return "";
}
