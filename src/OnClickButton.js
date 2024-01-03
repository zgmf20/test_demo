import React from 'react';

function OnClickButton(props) {
    return (
      <button onClick={props.onClick}>
        Click me!
      </button>
    );
    
    /* second example
    return (
        <button onClick={props.talk}>
        Click me!
        </button>
    );
    */
}
 /* third example no attribute vaule
    function OnClickButton() { 
        return (
            <button>
            Click me!
            </button>
        );
    }   
*/
export default OnClickButton;