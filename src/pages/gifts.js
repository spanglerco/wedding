import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';

export default function Gifts() {
  return (
    <CardLayout>
      <Header headerText="We don't really want stuff but ok" />
      <Nav activePage="gifts" />
      <div class="body-font">
        God has blessed us with software engineering jobs, so we aren't asking everyone to bring gifts.
        If you do want to get us a gift, please feel free to do so!
        Otherwise, we thought this would be a cool opportunity for generosity toward one of our favorite organizations.
      </div>
      <ul>
        <li>choice numba 1</li>
        <li>choice numba 2</li>
      </ul>
    </CardLayout>
  );
};