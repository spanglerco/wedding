import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';

export default function Accomodations() {
  const detailsStyle = {
    fontFamily: 'Glegoo',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 1.7
  };

  const iframeStyle = {
    width: 'min(660px, 90%)',
    marginTop: 20,
    height: 450
  };

  return (
    <CardLayout>
      <Header headerText="Hotel Recommendations" />
      <Nav activePage="accomodations" />
      <p className="body-font">
        Due to the uncertainty regarding COVID-19, we didn't reserve any hotels for our wedding.
        We submit for your consideration the following hotels, which are both about a 15-minute drive from the venue, a 25-minute drive from the airport, and have direct access to the rest of Austin:
      </p>
      <div style={detailsStyle}>
        <div>DoubleTree by Hilton Austin Northwest Arboretum</div>
        <div>8901 Business Park Dr, Austin, TX 78759</div>
        <br />
        <div>Holiday Inn Express & Suites Austin NW - Arboretum Area</div>
        <div>10711 Research Blvd, Austin, TX 78759</div>
        <iframe style={iframeStyle} src="https://www.google.com/maps/d/u/0/embed?mid=1QdrX61stFN8cFaNnkMNV-QT5UooYym54" width="640" height="480"></iframe>
        <br />
      </div>
    </CardLayout>
  );
};