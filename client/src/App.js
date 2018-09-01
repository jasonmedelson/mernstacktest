import React, { Component } from 'react';
import './App.css';
 class App extends Component {
  // Initialize state
  state = { anime: [] }
   // Fetch anime after first mount
  componentDidMount() {
    this.getAnimes();
  }
   getAnimes = () => {
    // Get the anime and store them in state
    fetch('/api/anime')
      .then(res => res.json())
      .then(anime => this.setState({ anime }));
  }
   render() {
    const { anime } = this.state;
     return (
      <div className="App">
        {/* Render the anime if we have them */}
        {anime.length ? (
          <div>
            <h1>Random Anime from database.</h1>
            <ul className="anime">
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of anime, and they never
                change positions in the array.
              */}
              {anime.map((anime, index) =>
                <li key={index}>
                  {anime}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getAnimes}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No anime :(</h1>
            <button
              className="more"
              onClick={this.getAnimes}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}
 export default App;
