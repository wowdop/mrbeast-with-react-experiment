import styled, { keyframes } from 'styled-components'

const Shadow = styled.div`
  position: absolute;
  left: 4px;
  right: -4px;
  bottom: -4px;
  top: 4px;
  background-color: #000;
  border-radius: 4px;
`

const swingAnimation = keyframes`
  0% {
    transform: rotate(-25deg);
  }
  100% {
    transform: rotate(25deg);
  }
`

const NoteWrapper = styled.div`
  position: absolute;
  top: -130px;
  left: 0;

  & > div:nth-child(1) {
    animation-delay: 0;
  }

  & > div:nth-child(2) {
    animation-delay: 250ms;
  }

  & > div:nth-child(3) {
    animation-delay: 400ms;
  }
`

const Note = styled.div`
  /* background-color: green; */
  width: 100px;
  height: 200px;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  position: absolute;
  z-index: 10;
  background-image: url(/image/pound-note.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
  transform: rotate(10deg);
  animation: ${swingAnimation} infinite 700ms alternate;
`

const Anchor = styled.div`
  position: relative;
  display: inline-block;
  margin: 1rem 3rem;
`

const Link = styled.a`
  background-color: hsla(54, 100%, 58%);
  color: white;
  font-size: 3rem;
  font-weight: 900;
  text-transform: uppercase;
  display: inline-flex;
  padding: 1rem 3rem;
  border: 2px solid black;
  border-radius: 4px;
  text-shadow: 4px 4px 0 black;
  -webkit-text-stroke: 4px black;
  position: relative;
  white-space: nowrap;

  &::before {
    position: absolute;
    white-space: nowrap;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    content: attr(data-text);
    /* text-shadow: -4px -4px 0 black; */
    text-shadow: 0;
    -webkit-text-stroke: 0;
    font-size: 3rem;
  }
`

const style = { Anchor, Link, Note, NoteWrapper, Shadow }

export default style
