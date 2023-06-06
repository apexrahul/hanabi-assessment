import React from 'react';

const Widget = () => {

  function clickAddNew (){
    console.log("called")
  }

  return (
    <div>
      <div>
        <p>New Tab</p>
      </div>
      <div>
        <p onClick={clickAddNew}>+</p>
      </div>
    </div>
  )
}

export default Widget
