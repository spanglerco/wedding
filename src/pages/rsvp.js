import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';
import { Button, Input } from '@material-ui/core';

export default function RSVP() {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const inputStyle = {
    fontFamily: 'Glegoo',
    margin: 10
  };

  return (
    <CardLayout>
      <Header headerText="Let us know if you're coming" />
      <Nav activePage="rsvp" />
      <div style={divStyle}>
        <Input style={inputStyle} placeholder="enter your name" />
        <Button style={inputStyle} variant="contained" color="primary">Find my invite!</Button>
      </div>
    </CardLayout>
  );
};