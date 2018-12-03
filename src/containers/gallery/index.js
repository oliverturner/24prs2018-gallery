import React from "react";

import { Wrapper, MainImage, Thumbnails } from "./styles";
import ImageLink from "./image-link"

class Gallery extends React.Component {
  state = {
    url: null
  };

  constructor(props) {
    super(props);
    this.displayImage = this.displayImage.bind(this);
  }

  displayImage(id) {
    const { images } = this.props;

    const url = images[id] ? images[id].urls.regular : "";
    this.setState({ url });
  }

  render() {
    const { images } = this.props;
    const { url } = this.state;

    return (
      <Wrapper>
        <MainImage>
          <img src={url} alt="" />
          <figcaption>caption</figcaption>
        </MainImage>
        <Thumbnails>
          {Object.values(images).map(({ id, urls }) => {
            const { thumb } = urls;
            return (
              <li key={id}>
                <ImageLink id={id} thumb={thumb} onClick={this.displayImage} />
              </li>
            );
          })}
        </Thumbnails>
      </Wrapper>
    );
  }
}

export default Gallery;
