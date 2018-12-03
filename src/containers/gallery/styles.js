import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  height: 100vh;
`;

export const MainImage = styled.figure`
  flex: 1;

  position: relative;
  margin: 0;
  padding: 0;
  background: palevioletred;

  & figcaption {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: white;
    background: #000000aa;
  }

  & img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

export const Thumbnails = styled.ul`
  flex-shrink: 0;

  display: flex;

  margin: 0;
  padding: 0;
  list-style: none;
  background: lemonchiffon;

  & img {
    width: 10vw;
    height: 10vh;
    object-fit: cover;
  }
`;
