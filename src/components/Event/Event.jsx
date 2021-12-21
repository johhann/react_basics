import React from 'react'

export default function Event() {
  function handleFire(e){
    e.preventDefault();
    alert("Event Fired");
  }
  return (
    <div>
      <button onClick={handleFire}>Fire</button>
    </div>
  )
}
