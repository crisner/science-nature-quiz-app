import React from 'react';

interface ButtonProps {
  onClick: any
  color: string
  text: string
}

const Button = (props: ButtonProps) => (
<button onClick={props.onClick} style={{backgroundColor: props.color}}>{props.text}</button>
)

export default Button;