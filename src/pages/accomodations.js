import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';

export default function Accomodations() {
  return (
    <CardLayout>
      <Header headerText="where 2 sleep" />
      <Nav activePage="accomodations" />
      <p class="body-font">idk probably a hotel? Holiday Inn Express?</p>
    </CardLayout>
  );
};