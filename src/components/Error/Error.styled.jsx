import styled from 'styled-components';

export const PhotoList = styled.ul`
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  width: 600px;
  height: 150px;
`;

export const PhotoListElement = styled.li`
  list-style: none;
  position: absolute;
  width: 200px;
  height: 200px;
  margin: -100px;
  transform: rotate(45deg);
  transition: 0.5s;
  overflow: hidden;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  & > div {
    width: 100%;
    height: 100%;
    transform: rotate(-45deg) scale(1.42);
  }

  &:nth-child(1) {
    top: 0;
    left: 0;
  }
  &:nth-child(1) > div {
    background-image: url('https://i.pinimg.com/1200x/5c/a4/f1/5ca4f1ff0d7bfc6f498b019e8070dc4b.jpg');
    background-size: cover;
  }
  &:nth-child(2) {
    bottom: 0;
    left: 25%;
  }
  &:nth-child(2) div {
    background-image: url('https://i.pinimg.com/736x/86/5c/07/865c0746d85031c16c3bd06a70711cda.jpg');
    background-size: cover;
  }
  &:nth-child(3) {
    top: 0;
    left: 50%;
  }
  &:nth-child(3) div {
    background-image: url('https://i.pinimg.com/736x/09/cf/f2/09cff23e7d4273613156b15f70d420e2.jpg');
    background-size: cover;
  }
  &:nth-child(4) {
    bottom: 0;
    left: 75%;
  }
  &:nth-child(4) div {
    background-image: url('https://i.pinimg.com/736x/3b/98/5c/3b985c0df4c33eac2fa2c318bd29a475.jpg');
    background-size: cover;
  }
  &:nth-child(5) {
    top: 0;
    left: 100%;
  }
  &:nth-child(5) div {
    background-image: url('https://i.pinimg.com/736x/47/3c/66/473c6694b8cea753f320b15dcb1ff920.jpg');
    background-size: cover;
  }
  &:nth-child(6) {
    top: 200%;
    left: 0;
  }
  &:nth-child(6) div {
    background-image: url('https://i.pinimg.com/736x/8d/64/34/8d6434c4a3b4bc6f8549efbd3c994a41.jpg');
    background-size: cover;
  }
  &:nth-child(7) {
    top: 200%;
    left: 50%;
  }
  &:nth-child(7) div {
    background-image: url('https://i.pinimg.com/736x/ba/5a/67/ba5a67bcaca408a696ce4f45080a803d.jpg');
    background-size: cover;
  }
  &:nth-child(8) {
    top: 200%;
    left: 100%;
  }
  &:nth-child(8) div {
    background-image: url('https://i.pinimg.com/1200x/f6/14/70/f6147091943661262d063d25ff72832a.jpg');
    background-size: cover;
  }
`;
