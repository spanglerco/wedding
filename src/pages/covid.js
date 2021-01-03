import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';

export default function COVID() {
  return (
    <CardLayout>
      <Header headerText="COVID-19 Guidelines" />
      <Nav activePage="covid" />
      <p class="body-font">
        Y'ALL it has been a year and our fingers are crossed that the situation has significantly improved by May, but it's possible that the Big Disaster of 2020 will prevail through the spring.
        Please bring a mask and prepare to social distance. In case you forget your mask, we will provide extras.
        We will also provide hand sanitizer.
        The chapel will have every other pew closed off, and tables at the reception will be limited to 4 people with the exception of families.
      </p>
      <p class="body-font">
        We are considering adding a video streaming link and will update this page accordingly.
      </p>
      <p class="body-font">
        Please let us (or the CDC) know if you have any questions or concerns.
      </p>
    </CardLayout>
  );
};