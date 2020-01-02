import React from 'react';
import { Row } from 'simple-flexbox';
import { Stylesheet, css } from 'aphrodite';
import Logo from '../../assets/icon-logo';

const styles = Stylesheet.create({
  container:{
    marginLeft: 32,
    marginRight: 32

  },
  title:{
    fontFamily: 'Multi',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 19,
    lineHeight: '24px',
    color:  '#A4A6B3',
    opacity:  0.7,
    marginLeft: 12

  }
})

function LogoComponent() {
  return (
    <Row className={css(style.container)} horizontal="center" vertical="center">
      <Logo/>
      <span className={css(style.title)}>Xortable</span>
    </Row>
  )
}
export default LogoComponent;