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
      year: '',
      director: '',
      genre: '',
      plot: ''
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
              year: response.data.Year, 
              director: response.data.Director,
              genre: response.data.Genre,
              plot: response.data.plot
            })
        }).catch((error) => {
            console.log(error)
        })
      
    }

   _searchById = (event) => {
    const Id = event.target.Id.value
     axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${Id}`, {
    }).then((response) => {
          console.log(response)
            this.setState({ 
              id: response.data.imdbID,
              title: response.data.Title,
              year: response.data.Year, 
              director: response.data.Director,
              genre: response.data.Genre,
              plot: response.data.plot
            })
        }).catch((error) => {
            console.log(error)
        })
      
    }


  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    console.log(this.state.title)
    console.log(this.state.year)

    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this._searchByTitle} searchById={this._searchById}/>
        <Movie id={this.state.id} title={this.state.title} year={this.state.year} director={this.state.director} genre={this.state.genre} plot={this.state.plot} />
      </div>
    );
  }
}

export default App;
