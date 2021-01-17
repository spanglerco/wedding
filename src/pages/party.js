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

  const annaText = 'Despite being Christine\'s younger sister, Anna is taller, stronger, louder, and even got married first. She\'s on the very short list of people Christine enjoys watching football with and trusts to drive (and fix!) her car. Anna is a Staff Sergeant in the US Air Force, currently stationed in Italy, where she works on F-16s.';
  const manojText = 'Manoj is Paul\'s best friend, whom he has known since fourth grade. Manoj\'s family is basically Paul\'s second (now third ;)) family, and they go on trips and do whatever friends do. Manoj is a Captain in the US Air Force, currently stationed in Oklahoma.';
  const catherineText = 'Catherine is the youngest and most wholesome Karas. The joke always was that she and Christine are the same person until she ruined it by getting braces, but now Christine is getting married, so it must be even. She is a medical assistant in her favorite city, Duluth, Minnesota.';
  const masonText = 'Mason is another good friend whom Paul met in high school. They bonded over cross country, youth symphony, and (you guessed it) doing whatever friends do. Mason moved from the homeland of Georgia to Columbus, Ohio, where he works for a drug company.';
  const zouaText = 'Zoua is Christine\'s spiritual accountability buddy and best good pal from church during college. She is opposite Christine in many ways, which helps both of them to learn and grow. Zoua is a massage therapist with her own practice, Twin Cities Thrive, in St. Paul, Minnesota.';
  const chimaText = 'Although Paul and Chima went to high school together, they really became friends in college. He\'s always on Paul\'s list of people to visit when he goes home to Georgia, and is about to be educated to the highest degree of the entire party. Chima lives in Macon, Georgia, where he is a nurse.';

  return (
    <CardLayout>
      <Header headerText="Check out our squad" />
      <Nav activePage="party" />

      <Typography style={headerStyle} variant="h4">Anna Huffman&mdash;Matron of Honor</Typography>
      <Story src="anna.jpg" text={annaText} />

      <Typography style={headerStyle} variant="h4">Manoj Rema&mdash;Best Man</Typography>
      <Story src="manoj.jpg" text={manojText} />

      <Typography style={headerStyle} variant="h4">Catherine Karas&mdash;Bridesmaid</Typography>
      <Story src="catherine.jpg" text={catherineText} />

      <Typography style={headerStyle} variant="h4">Mason Randle&mdash;Groomsman</Typography>
      <Story src="mason.jpg" text={masonText} />

      <Typography style={headerStyle} variant="h4">Zoua Her&mdash;Bridesmaid</Typography>
      <Story src="zoua.jpg" text={zouaText} />

      <Typography style={headerStyle} variant="h4">Chima Anukam&mdash;Groomsman</Typography>
      <Story src="chima.jpg" text={chimaText} />
    </CardLayout>
  );
};