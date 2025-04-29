import React, { Component } from 'react';

// Step 1: Define the type for state
interface CounterState {
  count: number;
}

// Step 2: If props were used, you'd define an interface like:
// interface CounterProps { ... }

// Step 3: Use React.Component with the appropriate state type
class Counter extends Component<{}, CounterState> {
  // Step 4: Define state with proper type
  state: CounterState = {
    count: 0,
  };

  // Step 5: Define the increment method with proper typing
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // Step 6: Properly return JSX (fix return statement line break)
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
