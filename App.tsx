import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Main from './src';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider>
      <Main />
    </NativeBaseProvider>
  );
}

export default App;
