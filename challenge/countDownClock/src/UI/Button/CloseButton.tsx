import Button  from "./Button";
import { useCardContext} from '../../CountdownClock/index';
import * as React from 'react';

const CloseButton = ({ icon }: { icon: string }) => {
  const { isForm, setIsForm } = useCardContext();
  return <>{isForm ? null : <Button onClick={() => setIsForm(true)}>{icon}</Button>}</>
};
export default CloseButton;