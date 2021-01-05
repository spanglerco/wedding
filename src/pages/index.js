import React from "react";
import Header from "../components/Header";
import Nav from '../components/Nav';
import Story from '../components/Story';
import CardLayout from '../components/CardLayout';

export default function Home() {
  const text = 'Once upon a time, Christine fell in love with a man named Paul Spangler.';
  return (
    <CardLayout>
      <Header headerText="Paul & Christine" subText="May 8, 2021 • Austin, TX" />
      <Nav activePage="home"/>
      <Story src="Paul-Christine-104.jpg" text={text} />
    </CardLayout>
  );
}
