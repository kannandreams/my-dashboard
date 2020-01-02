import React from 'react';
import { bool, func, string } from 'prop-types';
import { StyleSheet,css } from 'aphrodite';
import { Row } from 'simple-flexbox';


const style = StyleSheet.create({
  activeBar: {
    height: 56,
    width: 3,
    backgroundColor: '#DDE2FF',
    position: 'absolute',
    left: 0
  },
  activeContainer: {
    backgroundColor: 'rgba(221,226,255, 0.08)'
  },
  activeTitle: {
    color: '#DDE2FF'
  },
  container: {
    height: 56,
    cursor: 'pointer',
    ':hover': {
        backgroundColor: 'rgba(221,226,255, 0.08)'
    },
    paddingLeft: 32,
    paddingRight: 32
  },
  title: {
    fontFamily: 'Muli',
    fontSize: 16,
    lineHeight: '20px',
    letterSpacing: '0.2px',
    color: '#A4A6B3',
    marginLeft: 24
}
});


function MenuItemComponent(props) {
  const { active, icon, title, ...otherProps} = props;
  const Icon = icon;
  return (
    <Row className={css(style.container,active && style.activeContainer)} vertical="center" {...otherProps}>
      <Icon fill={active && "#DDE2FF"} opacity={!active && "0.4"} />
      <span className={css(style.title,active && style.activeTitle )}>{title}</span>
    </Row>

  );
}

MenuItemComponent.propTypes = {
  active: bool,
  icon: func,
  title: string
};

export default MenuItemComponent;