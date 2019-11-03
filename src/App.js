import React from 'react';
import {
  UKAlert,
  // UKAccordion,
  UKButton,
  UKCard,
  UKContainer
} from './components/uikit/UIKIT';

function App() {
  return (
    <UKContainer>
      <UKButton>Click Me</UKButton>
      {/* <UKAccordion></UKAccordion> */}
      <UKAlert animation="false">Animation Off</UKAlert>
      <UKAlert duration="5000">Duration Slowed</UKAlert>
      <UKCard>A Card</UKCard>
    </UKContainer>
  );
}

export default App;
