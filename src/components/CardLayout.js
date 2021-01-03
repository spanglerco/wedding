import React from "react";
import { Paper } from '@material-ui/core';

export default function Layout({ children }) {
  const cardStyle = {
    width: 'min(700px, 100%)',
    margin: '80px auto',
    padding: 20
  };

  const attributionStyle = {
    position: 'absolute',
    fontSize: 10,
    right: 0
  };

  return (
    <>
    <Paper style={cardStyle}>
      {children}
    </Paper>
    <a style={attributionStyle} href='https://www.freepik.com/photos/background'>Background photo created by freepik - www.freepik.com</a>
    </>
  );
}