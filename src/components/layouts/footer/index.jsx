/* React Core */
import React, { Component } from 'react';

/* Third Party */
import {
  Sidebar,
  Menu,
  Icon,
} from 'semantic-ui-react';

const Footer = () => {
  return (
    <Sidebar as={Menu} animation="overlay" direction="bottom" visible inverted>
      <Menu.Item name="github" href="https://github.com/gemcook/playground-gcmae">
        <Icon name="github" />
        github
      </Menu.Item>
    </Sidebar>
  )
};

export default Footer;
