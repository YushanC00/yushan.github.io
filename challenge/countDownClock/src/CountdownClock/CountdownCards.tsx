import { useCardContext } from './CountdownClockContext';
import CountdownCard from './CountdownCard';

import * as React from 'react';

export default function CountdownCards() {
  const { cards } = useCardContext();

  return (
    <>
      {cards.map(({ title }) => (
        <CountdownCard key={title} title={title} />
      ))}
    </>
  );
}