import * as React from "react";
import { Card } from "../UI/Card/index";
import { Button } from '../UI/Button/index';
import Timer from "./Timer";
import {useCardContext} from "../CountdownClock/index"
const CountdownCard = React.memo(({ title }: { title: string }) => {
  const { cards, setCards } = useCardContext();
  const renderCards = cards.filter(({ title:cardTitle })=> title !== cardTitle)
  
  return (
    <Card>
        <div className="flex justify-between"><h2>{title}</h2> <Button onClick={()=>setCards(renderCards)}>X</Button></div>
        <Timer/>
  </Card>
)});

export default CountdownCard;