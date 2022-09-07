import { Component } from 'react';
import Form from '../Form/Form';
import Tricks from '../Tricks/Tricks';
import { fetchData } from '../../apiCalls';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  addTrick = (newTrick) => {
    this.setState({
      tricks: [
        ...this.state.tricks,
        newTrick
      ]
    })
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
      <main className="App">
        <h1>Sick Trick Wish List</h1>
        <Form 
          addTrick={this.addTrick}
        />
        <Tricks 
          tricks={this.state.tricks}
        />
      </main>
    );
  }
}

export default App;