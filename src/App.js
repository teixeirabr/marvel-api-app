import React, { Component } from "react";
import "./App.css";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const HASH = process.env.REACT_APP_API_HASH;
const TS = process.env.REACT_APP_API_TS;
const BASE_URL = process.env.REACT_APP_BASE_URL;
const LIMIT = 99;

// const baseUrl = "http://gateway.marvel.com/v1/public/characters"
// const query = `?limit=${req.query.limit}&nameStartsWith=${req.query.name}`;
//hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey)
//dotenv boiler plate
// REACT_APP_BASE_URL=http://gateway.marvel.com/v1/public/characters
// REACT_APP_API_KEY=
// REACT_APP_API_HASH=
// REACT_APP_API_TS=""

class App extends Component {
  state = {
    marvel: "",
  };

  componentDidMount() {
    axios
      .get(`${BASE_URL}?limit=${LIMIT}&apikey=${API_KEY}&hash=${HASH}&ts=${TS}`)
      .then((res) => {
        let display = res.data.data.results.map((e, i) => {
          return <li key={i}>{e.name}</li>;
        });
        console.log(display);

        this.setState({
          marvel: display,
        });
      })
      .catch((e) => console.log("what is the error", e));
  }

  render() {
    return (
      <div className="App">
        <h1>My favorite Marvel is:</h1>
        {this.state.marvel}
      </div>
    );
  }
}

export default App;
