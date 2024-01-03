import React from 'react';
import Button from './OnClickButton';

function Talker() {
  function handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button onClick={handleClick}/>;
  
  //second example return <Button talk={talk} />;

  //third example return <Button onClick={talk} />; <-- cannot override button object.
}

export default Talker;