import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';
import Story from '../components/Story';
import { Typography } from '@material-ui/core';

export default function Party() {
  const headerStyle = {
    paddingLeft: 20
  };

  const annaText = 'Matron of honor.';
  const manojText = 'Best man.';
  const catherineText = 'Bridesmaid.';
  const masonText = 'Groomsman.';
  const zouaText = 'Bridesmaid.';
  const chimaText = 'Groomsman.';

  return (
    <CardLayout>
      <Header headerText="Look how cute our buds are" />
      <Nav activePage="party" />

      <Typography style={headerStyle} variant="h4">Anna Huffman</Typography>
      <Story src="anna.jpg" text={annaText} />

      <Typography style={headerStyle} variant="h4">Manoj Rema</Typography>
      <Story src="manoj.jpg" text={manojText} />

      <Typography style={headerStyle} variant="h4">Catherine Karas</Typography>
      <Story src="catherine.jpg" text={catherineText} />

      <Typography style={headerStyle} variant="h4">Mason Randle</Typography>
      <Story src="mason.jpg" text={masonText} />

      <Typography style={headerStyle} variant="h4">Zoua Her</Typography>
      <Story src="zoua.jpg" text={zouaText} />

      <Typography style={headerStyle} variant="h4">Chima Anukam</Typography>
      <Story src="chima.jpg" text={chimaText} />
    </CardLayout>
  );
};