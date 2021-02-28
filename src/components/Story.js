import React, { useEffect, useState } from 'react';

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

  let [paragraphs, setParagraphs] = useState([]);
  useEffect(() => {
    if (!Array.isArray(props.text)) {
      setParagraphs([props.text]);
    } else {
      setParagraphs(props.text);
    }
  }, [props.text]);

  const source = `/photo/${props.src}`;
  return (
    <div style={storyStyle}>
      <img style={imgStyle} src={source} alt="" />
      {paragraphs.map((text, index) => (
        <p key={`${index}`} style={textStyle}>{text}</p>
      ))}
    </div>
  );
};