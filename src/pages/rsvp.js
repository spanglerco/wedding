import React, { useRef, useState } from 'react';
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

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  let [error, setError] = useState('');
  let [foundInvite, setFoundInvite] = useState(false);
  let [invite, setInvite] = useState({
    allowChildren: false,
    familyName: '',
    maxAdults: 0,
    maxChildren: 0
  });

  const findInvite = (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current.firstElementChild.value;
    const lastName = lastNameRef.current.firstElementChild.value;
    const url = `https://spanglerwedding.azurewebsites.net/api/Invitations?firstName=${firstName}&lastName=${lastName}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status && data.status !== 200) {
          setError('We could not find your invite. Please guess what we think your name is :)');
          setFoundInvite(false);
        } else {
          setError('');
          setFoundInvite(true);
          setInvite(data)
        }
      });
  };

  const submitRSVP = (event) => {
    event.preventDefault();
  };

  return (
    <CardLayout>
      <Header headerText="Let us know if you're coming" />
      <Nav activePage="rsvp" />
      <div>
        <form style={divStyle} onSubmit={findInvite}>
          <Input ref={firstNameRef} style={inputStyle} placeholder="first name" />
          <Input ref={lastNameRef} style={inputStyle} placeholder="last name" />
          <div>{error}</div>
          <Button type="submit" style={inputStyle} variant="contained" color="primary">Find my invite!</Button>
        </form>
      </div>
      <div style={foundInvite ? {display: 'block'} : {display: 'none'}}>
        <p>{invite.familyName}</p>
        <form style={divStyle} onSubmit={submitRSVP}>
          <p>Adults: up to {invite.maxAdults}</p>
          <div>{invite.allowChildren ? `Kids: up to ${invite.maxChildren}` : ''}</div>
        </form>
      </div>
    </CardLayout>
  );
};