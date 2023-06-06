import React, { useState } from 'react';

function Widget() {
  const [openTab, getOpenTab] = useState([1]);

  function getNewTab() {
    return (
      <div>
        <p>New Tab</p>
      </div>
    );
  }

  function clickAddNew() {
    getOpenTab([...openTab, 1]);
    console.log(openTab);
  }

  return (
    <div>
      {openTab.map((tab) => getNewTab())}
      <div>
        <p onClick={clickAddNew}>+</p>
        <p onClick={removeTab}>-</p>
      </div>
    </div>
  );
}

export default Widget;
