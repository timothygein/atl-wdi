import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      year: ''
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = (event) => {
    event.preventDefault()
    console.log('This is searchByTitle')
    const title = event.target.title.value
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${title}`, {
        }).then((response) => {
          console.log(response)
            this.setState({ 
              title: response.data.Title,
              year: response.data.Year 
            })
        }).catch((error) => {
            console.log(error)
        })
      
    }

  _searchById = (event) => {
    axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: 'd31f1a94'
            }
        }).then((response) => {
            const _searchById = response.data.Id

        }).catch((error) => {
            console.log(error)
        })
      }

  componentWillMount(){
    this._searchById()
  }
  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    console.log(this.state.title)
    console.log(this.state.year)

    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this._searchByTitle} searchById={this._searchById}/>
        <Movie />
      </div>
    );
  }
}

export default App;
