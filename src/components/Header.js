import React from 'react';
import { Typography } from '@material-ui/core';

export default function Header(props) {
  const headerStyle = {
    paddingTop: 20
  };

  const mainText = <Typography className="header" variant="h2" style={headerStyle}>{props.headerText}</Typography>;
  let subText = '';
  if (props.subText) {
    subText = <Typography className="header" variant="h6">{props.subText}</Typography>;
  }
  return (
    <>
    {mainText}
    {subText}
    </>
  );
};