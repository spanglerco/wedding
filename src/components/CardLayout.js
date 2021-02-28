import React from "react";
import { Paper } from '@material-ui/core';

export default function Layout({ children }) {
  const cardStyle = {
    width: 'min(700px, 100%)',
    margin: '80px auto',
    padding: 20
  };

  const attributionStyle = {
    position: 'fixed',
    fontSize: 10,
    right: 0,
    bottom: 0,
    zIndex: '-1'
  };

  const topImgStyle = {
    position: 'fixed',
    top: 0,
    zIndex: '-2'
  };

  const bottomImgStyle = {
    position: 'fixed',
    bottom: 0,
    zIndex: '-2'
  };

  const divStyle = {
    flex: 1
  };

  return (
    <div style={divStyle}>
      <img style={topImgStyle} src="/photo/flowers-top.jpg" alt="some flowers" width="100%" />
      <Paper style={cardStyle}>
        {children}
      </Paper>
      <a style={attributionStyle} href='https://www.freepik.com/photos/background'>Background photo created by freepik - www.freepik.com</a>
      <img style={bottomImgStyle} src="/photo/flowers-bottom.jpg" alt="some more flowers" width="100%" />
    </div>
  );
}