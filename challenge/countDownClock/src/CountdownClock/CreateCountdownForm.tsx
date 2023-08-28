import { Button } from "../UI/Button/index";
import { useCardContext} from './CountdownClockContext';
import { Card } from '../UI/Card/index';
import * as React from "react";


const CreateCountDownForm = () => {
  const { cards, setCards, isForm, setIsForm } = useCardContext();
  const [inputText, setInputText] = React.useState("");
  const [hasError, setHasError] = React.useState(false);
  const handleOnClickAdd = () => {
    if (inputText.trim() !== "") {
      setCards([...cards, { title: inputText }]);
      setInputText("");
      
    } else {
      setHasError(true)
    }
  }
  const handOnClickCancel = () => {
    setInputText("");
    setIsForm(false) 
  }
  return (
  <>
  {isForm? <Card>
      <form>
        <div className="flex flex-wrap -mx-3 mb-6">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Title
          </label>
          <input className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${hasError?"border-red-500":""} rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`} id="grid-first-name" type="text" placeholder="Jane" onChange={ (e)=> setInputText(e.target.value)} value={inputText}/>
            <div className="flex justify-between w-full">
              <Button isSecondary onClick={handOnClickCancel}>Cancel</Button>
              <Button onClick={handleOnClickAdd}>Add</Button>
          </div>
        </div>
      </form>
    </Card>:null}
      
 </>
  )
};

export default CreateCountDownForm;