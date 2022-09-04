import styled, { keyframes, css } from 'styled-components'

const commonText = css`
  font-size: 3rem;
  font-weight: 900;
  padding: 1rem 3rem;
  text-transform: uppercase;
`

const Shadow = styled.div`
  position: relative;
  left: 0;
  right: -0;
  bottom: -0;
  top: 0;
  background-color: #000;
  border-radius: 4px;
  white-space: nowrap;
  border: 2px solid transparent;

  ${commonText}
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
  pointer-events: none;

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

const Link = styled.a`
  background-color: hsla(${({ hue = 54 }) => hue}, 100%, 58%);
  color: white;
  display: inline-flex;
  border: 2px solid black;
  border-radius: 4px;
  text-shadow: 4px 4px 0 black;
  -webkit-text-stroke: 4px black;
  position: absolute;
  top: -4px;
  left: -4px;
  transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  white-space: nowrap;

  ${commonText}

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

const Anchor = styled.div`
  position: relative;
  display: inline-block;
  margin: 1rem 3rem;

  &:hover ${Link} {
    top: -8px;
    left: -8px;
  }
`

const style = { Anchor, Link, Note, NoteWrapper, Shadow }

export default style
