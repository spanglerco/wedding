import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';

export default function Photos() {
  return (
    <CardLayout>
      <Header headerText="Look how cute we are" />
      <Nav activePage="photos" />
    </CardLayout>
  );
};