import React, { Component } from 'react';
import './App.css';
import {myMove} from './script.js'
 class App extends Component {
  // Initialize state
  state = { anime:[],

    // anime: [{anime_title: "Naruto", anime_score: 95},
    //                 {anime_title: "Bleach", anime_score: 22},
    //                 {anime_title: "One Piece", anime_score: 96},
    //                 {anime_title: "Dragon Ball", anime_score: 5},],

                  }
                  // Fetch anime after first mount
  componentDidMount() {
    // this.getAnimes();
  }
   getAnimes = () => {
     myMove()
    // Get the anime and store them in state
    fetch('/api/anime')
      .then((response) => {
        console.log("response",response);
        response.json().then((result) =>{
          console.log( "result",result.animes);
          this.setState({anime: result.animes})
        })
      })
  }
   render() {
    const anime  = this.state.anime;
    if ({anime}.anime.length){
      var test = [];
      var number = Math.floor(Math.random() * {anime}.anime.length);
      test.push(anime[number])
    }
    else{
      test=anime
    }

    console.log("rendered", {anime}.anime.length);
    console.log("rendered2", anime[0]);
     return (
      <div className="App">
        {/* Render the anime if we have them */}
        { anime  ? (
          <div>
            <h1>Monkey S&P 500 Stock Picker</h1>
            <button
              className="more"
              onClick={this.getAnimes}>
              Pick Stock
            </button>
            <div id="monkey1">
              <div id='monkey2'></div>

              <ul className="anime">
                {/*
                  Generally it's bad to use "index" as a key.
                  It's ok for this example because there will always
                  be the same number of anime, and they never
                  change positions in the array.
                */}
                {test.map((anime) =>

                  <li key={anime.anime_score}>
                    Stock Name: {anime.anime_title} - Ticker Symbol: {anime.anime_score}
                  </li>
                )}
              </ul>
            </div>
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
