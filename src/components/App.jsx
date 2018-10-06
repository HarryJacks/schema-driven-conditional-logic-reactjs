import React from 'react';
import MyForm from './MyForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'App Name',
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <MyForm />
      </div>
    );
  }
 
}


export default App;