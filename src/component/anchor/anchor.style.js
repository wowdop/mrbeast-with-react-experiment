import styled from 'styled-components'

const Shadow = styled.div`
  position: absolute;
  left: 4px;
  right: -4px;
  bottom: -4px;
  top: 4px;
  background-color: #000;
  border-radius: 4px;
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

const style = { Anchor, Link, Shadow }

export default style
