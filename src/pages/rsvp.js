import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';
import { Button, Input, FormControlLabel, Checkbox } from '@material-ui/core';

export default function RSVP() {
  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const rsvpFormBodyStyle = {
    display: 'block',
    margin: 10,
    width: 210
  };

  const inputStyle = {
    fontFamily: 'Glegoo',
    margin: 10
  };

  const familyNameStyle = {
    fontFamily: 'Euphoria Script',
    fontSize: 28,
    marginTop: 28
  };

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  let [error, setError] = useState('');
  let [foundInvite, setFoundInvite] = useState(false);
  let [invite, setInvite] = useState({
    allowChildren: false,
    familyName: '',
    invited: [],
    maxAdults: 0
  });

  let [names, setNames] = useState([]);
  let [additional, setAdditional] = useState([]);
  useEffect(() => {
    setNames(invite.invited.map(i => i.firstName));

    const extras = invite.maxAdults - invite.invited.length;
    if (extras > 0) {
      setAdditional([Array.from(Array(extras).keys())]);
    } else {
      setAdditional([]);
    }
  }, [invite]);

  const findInvite = (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current.firstElementChild.value;
    const lastName = lastNameRef.current.firstElementChild.value;
    const url = `https://spanglerwedding.azurewebsites.net/invitations?firstName=${firstName}&lastName=${lastName}`;
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
      <div style={foundInvite ? divStyle : {display: 'none'}}>
        <div style={familyNameStyle}>Invitation for {invite.familyName}</div>
        <form style={divStyle} onSubmit={submitRSVP}>
          <div style={rsvpFormBodyStyle}>
            {names.map(name => (
              <FormControlLabel
                key={name}
                control={
                  <Checkbox
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={name}
              />)
            )}
            {additional.map((v, index) => (
              <Input key={index} placeholder="Additional attendee"></Input>
            ))}
          </div>
          <Button type="submit" style={inputStyle} variant="contained" color="primary">Give cake pls!</Button>
        </form>
      </div>
    </CardLayout>
  );
};