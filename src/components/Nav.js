import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

export default function Nav(props) {
  const navStyle = {
    padding: 20,
    textAlign: 'center'
  };

  return (
    <div style={navStyle}>
      <Link to="/" className={props.activePage === 'home' ? 'plain-link-text' : ''}>Home</Link>
      {" | "}
      <Link to="/details" className={props.activePage === 'details' ? 'plain-link-text' : ''}>Details</Link>
      {" | "}
      <Link to="/accomodations" className={props.activePage === 'accomodations' ? 'plain-link-text' : ''}>Guest Accomodations</Link>
      {" | "}
      <Link to="/covid" className={props.activePage === 'covid' ? 'plain-link-text' : ''}>COVID-19</Link>
      {" | "}
      <Link to="/party" className={props.activePage === 'party' ? 'plain-link-text' : ''}>Wedding Party</Link>
      {" | "}
      <Link to="/photos" className={props.activePage === 'photos' ? 'plain-link-text' : ''}>Photos</Link>
      {" | "}
      <Link to="/rsvp" className={props.activePage === 'rsvp' ? 'plain-link-text' : ''}>RSVP</Link>
      {" | "}
      <Link to="/gifts" className={props.activePage === 'gifts' ? 'plain-link-text' : ''}>Gifts</Link>
    </div>
  )
}