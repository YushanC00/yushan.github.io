import * as React from 'react';

type ButtonProps = {
  children: string,
  onClick: () => void,
  isSecondary?:Boolean
}
const Button = ({ children, onClick, isSecondary = false }: ButtonProps) => {
  const buttonStyle = isSecondary? "bg-transparent text-blue-700 font-semibold  py-2 px-4 border border-blue-500  rounded":"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  return <button onClick={onClick} type="button" className={buttonStyle}>{children}</button>
}

export default Button;