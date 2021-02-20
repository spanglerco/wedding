import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';
import { Button, Input, FormControlLabel, Checkbox, FormControl, InputLabel } from '@material-ui/core';

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

  const optionalFieldStyle = {
    paddingTop: 20
  };

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const rsvpFormRef = useRef(null);
  const plusOneRef = useRef(null);
  const emailRef = useRef(null);
  const commentsRef = useRef(null);
  let [error, setError] = useState('');
  let [foundInvite, setFoundInvite] = useState(false);
  let [invite, setInvite] = useState({
    allowChildren: false,
    familyName: '',
    invited: [],
    maxAdults: 0
  });

  let [names, setNames] = useState([]);
  let [additional, setAdditional] = useState(false);
  let accepts = [];
  useEffect(() => {
    setNames(invite.invited);
    rsvpFormRef.current.reset();
    accepts = [];

    const extras = invite.maxAdults - invite.invited.length;
    if (extras > 0) {
      setAdditional(true);
    } else {
      setAdditional(false);
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

  const handleCheckChange = (event) => {
    const index = Number.parseInt(event.currentTarget.id);
    const person = invite.invited[index];
    if (event.currentTarget.checked) {
      accepts.push(person);
    } else {
      accepts = accepts.filter(x => x.firstName !== person.firstName || x.lastName !== person.lastName);
    }
  };

  const submitRSVP = (event) => {
    event.preventDefault();
    if (plusOneRef.current && plusOneRef.current.firstElementChild.value) {
      accepts.push({
        firstName: plusOneRef.current.firstElementChild.value,
        lastName: '',
        isChild: false
      });
    }
    const rsvp = {
      firstName: firstNameRef.current.firstElementChild.value,
      lastName: lastNameRef.current.firstElementChild.value,
      numAdults: accepts.filter(x => x.isChild === false).length,
      numChildren: accepts.filter(x => x.isChild).length,
      comments: commentsRef.current.firstElementChild.value,
      email: emailRef.current.firstElementChild.value,
      attendees: accepts.map(x => `${x.firstName} ${x.lastName}`.trim())
    };
    console.log(rsvp);
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
        <form ref={rsvpFormRef} style={divStyle} onSubmit={submitRSVP}>
          <div style={rsvpFormBodyStyle}>
            {names.map((name, index) => (
              <FormControlLabel
                key={`${name.firstName}${name.lastName}${index}`}
                control={
                  <Checkbox
                    id={`${index}`}
                    onChange={handleCheckChange}
                    color="primary"
                  />
                }
                label={name.firstName}
              />)
            )}
            {additional && (
              <Input ref={plusOneRef} placeholder="Additional attendee"></Input>
            )}
            <div style={optionalFieldStyle}>
              <FormControl>
                <InputLabel>Email (optional)</InputLabel>
                <Input ref={emailRef} />
              </FormControl>
              <FormControl>
                <InputLabel>Comments</InputLabel>
                <Input multiline ref={commentsRef} />
              </FormControl>
            </div>
          </div>
          <Button type="submit" style={inputStyle} variant="contained" color="primary">Give cake pls!</Button>
        </form>
      </div>
    </CardLayout>
  );
};