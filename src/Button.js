import React from 'react';
/*
PROPS
Giving Default Values to props
Take a look at the Button component. Notice that on line 6, Button expects to receive a prop named text. The received text will be displayed inside of a <button> element.

What if nobody passes any text to Button?

If nobody passes any text to Button, then Button‘s display will be blank. It would be better if Button could display a default message instead.

You can make this happen by specifying a default value for the prop. There are three ways to do this!

The first method is adding a defaultProps static property to the component:
*/
function Button(props) {
  
    return (
      <button>{props.text}</button>
    );
}
Button.defaultProps = {
  text: 'Default Text of Big Button',
};

/*
    Second method
function Button({text='This is default text'}) {
    return <h1>{text}</h1>
}
    Third method
function Example(props) {
  const {text = 'This is default text'} = props;
  return <h1>{text}</h1>
}
*/
export default Button;