import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';

export default function Details() {
  const detailsStyle = {
    fontFamily: 'Glegoo',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 1.7
  };

  const iframeStyle = {
    width: 'min(660px, 90%)',
    height: 450
  };

  const small = {
    fontSize: 14,
    fontStyle: 'italic'
  };

  return (
    <CardLayout>
      <Header headerText="Wedding Details" />
      <Nav activePage="details" />
      <div style={detailsStyle}>
        <div>May 8, 2021</div>
        <div>2:00 pm</div>
        <div>Attire: business casual</div>
        <div>Reception with heavy hors d'oeuvres to follow in ballroom</div>
        <br />
        <div>Smith Family Chapel at Riverbend Church</div>
        <div>4214 N Capital of Texas HWY, Austin, TX 78746</div>
        <div style={small}>Parking is to the right as you enter from Capital of Texas Highway</div>
        <br />
        <iframe style={iframeStyle}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.332996531587!2d-97.8042942!3d30.3414848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b34df5b3a7a47%3A0x812dd6b912e3a57!2sRiverbend%20Church!5e0!3m2!1sen!2sus!4v1605836264309!5m2!1sen!2sus"
          frameBorder="0" title="Riverbend map" aria-hidden="false"></iframe>
        <br />
      </div>
    </CardLayout>
  );
}