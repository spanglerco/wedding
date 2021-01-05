import React from 'react';

export default function Story(props) {
  const storyStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const imgStyle = {
    width: 'min(500px, 90%)',
    paddingBottom: 20
  };

  const textStyle = {
    width: 'min(500px, 90%)',
    fontFamily: 'Glegoo',
    textAlign: 'justify'
  };

  const source = `/photo/${props.src}`;
  return (
    <div style={storyStyle}>
      <img style={imgStyle} src={source} alt="" />
      <p style={textStyle}>{props.text}</p>
    </div>
  );
};