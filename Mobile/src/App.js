import React from "react";
import RootContainer from './RootContainer'
import { Provider } from 'react-redux';
import createStore from './Redux';

const store = createStore();

class App extends React.Component {
  render() {
    return (
        <Provider store={ store }>
            <RootContainer />
        </Provider>        
    );
  }
}

export default App;