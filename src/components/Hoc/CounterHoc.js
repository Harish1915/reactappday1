import React, { useState } from 'react';

const withCounter = (WrappedComponent) => {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return ( // used in blog screen 
      <WrappedComponent
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
        {...props}
      />
    );
  };
};

export default withCounter;
