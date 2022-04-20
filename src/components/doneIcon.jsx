import React from 'react'

function Done({onDone}) {
  return (
    <i className="icons fa fa-check mr-2" onClick={onDone}
    style={{cursor: "pointer"}} aria-hidden="true"
    data-toggle="tooltip" data-placement="auto" title="Done"></i>
  )
}

export default Done