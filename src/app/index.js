import React from "react";

import "./styles.css";
import Loader from "../components/loader";
import Gallery from "../containers/gallery";

const url = "https://api.unsplash.com";

const objectify = arr => {
  return arr.reduce((acc, o) => ({ ...acc, [o.id]: o }), {});
};

class App extends React.Component {
  state = {
    isLoading: false,
    images: []
  };

  async componentDidMount() {
    const clientId = process.env.REACT_APP_APIKEY;

    try {
      this.setState({ isLoading: true });
      const res = await fetch(`${url}/photos/?client_id=${clientId}`);
      const json = await res.json();
      this.setState({ isLoading: false, images: json });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { isLoading, images } = this.state;

    return (
      <div className="App">
        {isLoading ? <Loader /> : <Gallery images={objectify(images)} />}
      </div>
    );
  }
}

export default App;
