import React from 'react'

function Close({onClose}) {
  return (
    <i className="icons fa fa-times-circle" 
    style={{cursor: "pointer"}} 
    onClick={onClose} aria-hidden="true"></i>
  )
}

export default Close