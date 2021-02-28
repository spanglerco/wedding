import React from "react";
import Header from "../components/Header";
import Nav from '../components/Nav';
import Story from '../components/Story';
import CardLayout from '../components/CardLayout';

export default function Home() {
  const text = [
    `Paul and Christine met in August 2018, when Christine joined Paul's group at
    National Instruments, where they are both software engineers. We quickly bonded
    over a shared love of word-related humor. Although our relationship was work-first,
    we became good friends and often discussed topics not related to work. As Paul
    began to trust Christine with bigger things in his life, and interest between us
    grew, we started seeing each other outside of work as well. Totally just social.
    You know. Eventually, the time came when neither of us could deny how we felt, so
    we took a long walk, a week of texting, and one fateful Saturday (that would be
    May 2, 2020—some good things did come out of the crazy year) to decide to embark
    upon a romantic adventure. Since then, we have been growing in knowledge of and
    love for one another and Jesus, while enduring the wild circumstances of the past
    year together.`,
    `In November of 2020, Paul prepared a romantic and special proposal that Christine
    only half-anticipated. He wrote a book detailing the journey of our time together,
    over-planned a picnic, and coordinated friends to set up the scene and sneak-attack
    with professional photographs. We had been talking about marriage since a trip to
    visit Christine's family in July and were overjoyed to be taking public steps
    toward a future of oneness.`,
    `Engagement has been a very busy season: planning a wedding, buying a house, and
    going through marriage mentoring with a couple from our church, on top of our
    regular work and life schedules. We decided to make it even more intense by creating
    our own website! It has been very rewarding and will be even more so if we only
    receive positive feedback! In all seriousness, preparing for marriage has been
    our first "group project," and it is wonderful getting to make big decisions
    together, seeing each other's priorities played out in real circumstances, and
    thinking about how much cake we get to enjoy on May 8.`,
    `We are so excited to spend our first day as Mr. & Mrs. Paul Spangler with our
    friends and family. That's you! We appreciate you and are grateful to be surrounded
    by such an uplifting community.`
  ];
  return (
    <CardLayout>
      <Header headerText="Paul & Christine" subText="May 8, 2021 • Austin, TX" />
      <Nav activePage="home"/>
      <Story src="Paul-Christine-104.jpg" text={text} />
    </CardLayout>
  );
}
