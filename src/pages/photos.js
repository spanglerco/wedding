import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';

export default function Photos() {
  const imgStyle = {
    width: 'min(500px, 90%)',
    paddingBottom: 20
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <CardLayout>
      <Header headerText="Look how cute we are" subText="photo credit - Christina Hastings; dress credit - Old Navy; man credit - God" />
      <Nav activePage="photos" />
      <div style={contentStyle}>
        <img style={imgStyle} src="photo/Paul-Christine-17.jpg" alt="" />
        <img style={imgStyle} src="photo/Paul-Christine-63.jpg" alt="" />
        <img style={imgStyle} src="photo/Paul-Christine-84.jpg" alt="" />
        <img style={imgStyle} src="photo/Paul-Christine-86.jpg" alt="" />
        <img style={imgStyle} src="photo/Paul-Christine-99.jpg" alt="" />
      </div>
    </CardLayout>
  );
};