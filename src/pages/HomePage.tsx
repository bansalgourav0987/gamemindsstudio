import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { FeaturedGames } from '../components/home/games/FeaturedGames';
import { Rating } from '../components/rating/Rating';
import { HomeTechnologySection } from '../components/home/technology/HomeTechnologySection';
import { games } from '../data/games';

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <FeaturedGames games={games} />
      <HomeTechnologySection />
      <Rating />
    </>
  );
};