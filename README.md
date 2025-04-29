# React TypeScript Checkpoint

This project contains two simple React components converted from JavaScript to TypeScript as part of a TypeScript learning checkpoint.

## 📁 Files

### 1. `Greeting.tsx`
A functional component that accepts a `name` prop and displays a greeting message.

**Key Features:**
- Uses TypeScript `interface` to define props
- Typed using `React.FC`

### 2. `Counter.tsx`
A class-based component with internal state that keeps track of a count.

**Key Features:**
- Uses TypeScript `interface` to define the state
- Typed using `React.Component<props, state>`
- Implements a typed `increment` method

## 🚀 Getting Started

### 1. Install Dependencies
Make sure you have Node.js and TypeScript installed. Then initialize a React + TypeScript project:

```bash
npx create-react-app my-app --template typescript
cd my-app
```

### 2. Add the Files

Copy `Greeting.tsx` and `Counter.tsx` into the `src/` folder of your React project.

### 3. Use the Components

Open `App.tsx` and import the components like so:

```tsx
import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Counter />
    </div>
  );
}

export default App;
```

### 4. Run the App

```bash
npm start
```

Open your browser to `http://localhost:3000` and you should see the greeting and the counter.

## ✅ Purpose

This exercise demonstrates how to:
- Convert React components to TypeScript
- Define interfaces for props and state
- Properly type functional and class components

Happy Coding! 🎉
# gomycode-TypescriptReact
