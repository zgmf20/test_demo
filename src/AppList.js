import React from 'react';
import List from './List';

function AppList() {
  return (
    <div>
      <List type='Living Musician'>
        <li>Sachiko M</li>
        <li>Harvey Sid Fisher</li>
      </List>
      <List type='Living Cat Musician'>
        <li>Nora the Piano Cat</li>
        <li>Piano Cat</li>
      </List>
    </div>
  );
}

export default AppList;