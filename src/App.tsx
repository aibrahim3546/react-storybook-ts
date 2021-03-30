import React from 'react';
import styled from 'styled-components';
import './App.css';

import MLButton from './components/MLButton/MLButton';
import MLTextInput from './components/MLInput/MLTextInput';
import MLNumberInput from './components/MLInput/MLNumberInput';

const GapDiv = styled.div`
  padding: 10px 0px;
`;

function App() {
  return (
    <div className="App">
      <div style={{ width: 350, margin: 'auto', textAlign: 'left', paddingTop: 50 }}>
        <MLButton 
          type="primary"
          size="medium"
          label="Select"
          onClick={() => {}}
        />
        <GapDiv />
        <MLTextInput
          onChange={() => {}}
          label="Name"
          placeholder="e.g John Doe"
          isError
          errorMessage="Name is required!"
        />
        <GapDiv />
        <MLNumberInput
          label="Age"
          onChange={() => {}}
        />
      </div>
    </div>
  );
}

export default App;
