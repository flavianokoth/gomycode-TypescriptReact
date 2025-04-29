import React from 'react';

// Step 1: Define the type of props expected by the component
interface GreetingProps {
  name: string; // We expect a 'name' prop of type string
}

// Step 2: Use the defined type in the component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
