import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import CardLayout from '../components/CardLayout';

export default function Gifts() {
  return (
    <CardLayout>
      <Header headerText="How to proceed if you want to spend money" />
      <Nav activePage="gifts" />
      <div class="body-font">
        God has blessed us with software engineering jobs, so we aren't asking everyone to bring gifts.
        If you do want to get us a gift, please feel free to do so!
        Otherwise, we thought this would be a cool opportunity for generosity toward one of our favorite organizations.
      </div>
      <br />
      <div class="body-font">
        <a href="https://forthenations.org/give/">Austin Stone's For the Nations Team</a>
        <p>"The heart of The Austin Stone is for all peoples to know, worship, and enjoy God. This is lived out in an international context primarily through our For the Nations ministry."</p>
      </div>
      <br />
      <div class="body-font">
        <a href="https://www.ijm.org/">International Justice Mission</a>
        <p>"International Justice Mission is an international, non-governmental 501 organization focused on human rights, law and law enforcement."</p>
      </div>
      <br />
      <div class="body-font">
        <a href="https://www.salvationarmyusa.org/usn/">The Salvation Army</a>
        <p>"The Salvation Army exists to meet human need wherever, whenever, and however we can."</p>
      </div>
    </CardLayout>
  );
};