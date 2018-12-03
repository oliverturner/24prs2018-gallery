import React from "react";

const ImageLink = ({ id, thumb, onClick }) => (
  <a
    href={`gallery/${id}`}
    onClick={event => {
      event.preventDefault();
      onClick(id);
    }}
  >
    <img src={thumb} alt="thumbnail" className="gallery__thumb" />
  </a>
);

export default ImageLink;
