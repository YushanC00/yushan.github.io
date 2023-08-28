import * as React from 'react';
import { createContext, useContext, useState, PropsWithChildren } from 'react'
type CardProp = { title: string }
type CardsProp = {
  cards: CardProp[],
  setCards: (val: CardProp[]) => void;
  isForm: boolean,
  setIsForm : (val:boolean) => boolean;
}
const initialState: CardsProp = { cards: [{ title: "card 1" }, { title: "card 2" }], setCards: (val: CardProp[]) => { val }, isForm: false, setIsForm: (val) => val};
const CountdownClockContext = createContext(initialState);

export const CountdownClockProvider = (props:PropsWithChildren) => {
  const [cards, setCards] = useState([...initialState.cards]);
  const [isForm, setIsForm] = useState(initialState.isForm);
  return (
    <CountdownClockContext.Provider value={{ cards, setCards, isForm, setIsForm }}>{props.children}</CountdownClockContext.Provider>
  )
}


export const useCardContext = () => {
  const context = useContext(CountdownClockContext);
  if (context === undefined) {
    throw new Error("useCardContext must be used within a ThemeProvider")
  }
  return context;
}
