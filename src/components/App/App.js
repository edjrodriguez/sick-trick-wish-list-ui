import { Component } from 'react';
import Form from '../Form/Form';
import Tricks from '../Tricks/Tricks';
import { fetchData } from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [
     
        ]
    }
  }

  componentDidMount() {
    fetchData()
      .then((response) => {
        this.setState({
          tricks: response
        })
      })

  }


  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <Tricks 
          tricks={this.state.tricks}
        />


      </div>
    );
  }
}

export default App;