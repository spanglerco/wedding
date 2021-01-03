import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';

export default function Party() {
  return (
    <CardLayout>
      <Header headerText="Look how cute our buds are" />
      <Nav activePage="party" />
    </CardLayout>
  );
};