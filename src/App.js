import React , { Component}  from 'react';
import WelcomeScreen from './screens/welcome.js';

class App extends Component {
    render(){
        return(
          <div className="bg-gray">
            <WelcomeScreen/>
          </div>
        );
    }
}

export default App