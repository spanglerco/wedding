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

  const rsvpFormRef = useRef(null);
  const emailRef = useRef(null);
  const commentsRef = useRef(null);
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [plusOne, setPlusOne] = useState('');
  let [error, setError] = useState('');
  let [foundInvite, setFoundInvite] = useState(false);
  let [loading, setLoading] = useState('');
  let [n, setN] = useState(0);
  let [invite, setInvite] = useState({
    allowChildren: false,
    familyName: '',
    invited: [],
    maxAdults: 0
  });

  let [names, setNames] = useState([]);
  let [additional, setAdditional] = useState(false);
  let [accepts, setAccepts] = useState([]);
  useEffect(() => {
    setN(n + 1);
    setNames(invite.invited);
    rsvpFormRef.current.reset();
    setAccepts([]);
    setPlusOne('');

    const extras = invite.maxAdults - invite.invited.length;
    if (extras > 0) {
      setAdditional(true);
    } else {
      setAdditional(false);
    }
  }, [invite]);

  const findInvite = (event) => {
    event.preventDefault();
    setLoading('Finding your invitation...');
    const url = `https://spanglerwedding.azurewebsites.net/invitations?firstName=${firstName}&lastName=${lastName}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setLoading('');
        if (data.status && data.status !== 200) {
          setError('We could not find your invitation. Please try another spelling; we are engineers, not English majors.');
          setFoundInvite(false);
        } else {
          setError('');
          setFoundInvite(true);
          setInvite(data)
        }
      })
      .catch(() => {
        setError('Oops, you caught us at a bad time. Our RSVP system isn\'t working right now. Please try again later or email us at wedding.spanglerco.com.');
        setFoundInvite(false);
        setLoading('');
      });
  };

  const handleCheckChange = (event) => {
    const index = Number.parseInt(event.currentTarget.id);
    const person = invite.invited[index];
    if (event.currentTarget.checked) {
      setAccepts(accepts.concat(person));
    } else {
      setAccepts(accepts.filter(x => x.firstName !== person.firstName || x.lastName !== person.lastName));
    }
  };

  const submitRSVP = (event) => {
    event.preventDefault();
    const attendees = accepts.slice();
    if (plusOne) {
      attendees.push({
        firstName: plusOne,
        lastName: '',
        isChild: false
      });
    }

    const rsvp = {
      firstName: firstName,
      lastName: lastName,
      numAdults: attendees.filter(x => x.isChild === false).length,
      numChildren: attendees.filter(x => x.isChild).length,
      comments: commentsRef.current.firstElementChild.value,
      email: emailRef.current.firstElementChild.value,
      attendees: attendees.map(x => `${x.firstName} ${x.lastName}`.trim())
    };

    fetch('https://spanglerwedding.azurewebsites.net/rsvps', {
      method: 'POST',
      body: JSON.stringify(rsvp),
      headers: { 
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(data => {
      setLoading('');
      if (data.status && data.status !== 204) {
        setError(`Oh dear, it didn't work. That's awkward. Click "Find my invite" to try again, or email us at wedding@spanglerco.com.`);
        setFoundInvite(false);
      } else {
        setError('');
        setLoading('RSVP received! Thank you for responding.');
        setFoundInvite(false);
      }
    })
    .catch(() => {
      setError('Oops, you caught us at a bad time. Our RSVP system isn\'t working right now. Please try again later or email us at wedding.spanglerco.com.');
      setFoundInvite(false);
      setLoading('');
    });
  };

  return (
    <CardLayout>
      <Header headerText="Let us know if you're coming" />
      <Nav activePage="rsvp" />
      <div style={foundInvite ? {display: 'none'} : divStyle}>
        <form style={divStyle} onSubmit={findInvite}>
          <Input onChange={(event) => setFirstName(event.target.value)} style={inputStyle} placeholder="First name" />
          <Input onChange={(event) => setLastName(event.target.value)} style={inputStyle} placeholder="Last name" />
          <Button type="submit"
            style={inputStyle}
            disabled={!firstName || !lastName}
            variant="contained"
            color="primary">
              Find my invitation
          </Button>
          <div>{error}</div>
          <div>{loading}</div>
        </form>
      </div>
      <div style={foundInvite ? divStyle : {display: 'none'}}>
        <div style={familyNameStyle}>Invitation for {invite.familyName}</div>
        <div style={inputStyle}>Please check the boxes next to those who will attend.</div>
        <form ref={rsvpFormRef} style={divStyle} onSubmit={submitRSVP}>
          <div style={rsvpFormBodyStyle}>
            {names.map((name, index) => (
              <FormControlLabel
                key={`${name.firstName}${name.lastName}${n}`}
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
              <Input onChange={(event) => setPlusOne(event.target.value)} placeholder="Additional attendee"></Input>
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
          <Button type="submit" disabled={!firstName || !lastName} style={inputStyle} variant="contained" color="primary">Submit RSVP</Button>
        </form>
      </div>
    </CardLayout>
  );
};