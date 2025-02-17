import React from 'react';
import { useIdPrefix } from '@carbon/react';
import { IdPrefix } from '@carbon/react';

function ExampleComponent() {
  const idPrefix = useIdPrefix();

  return (
    <p>The current id prefix is: {idPrefix}</p>
  )
}

function App() {
  return (
    <>
      <ExampleComponent />
        <IdPrefix prefix="custom">
          <ExampleComponent />
        </IdPrefix>
    </>
  );
}

export default App
