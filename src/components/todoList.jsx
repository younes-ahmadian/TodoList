import React from 'react';
import Close from './closeIcon';
import Done from './doneIcon';

function TodoList({data, onEdit, onClose, onDone}) {

  return (
    <div className='todoList'>
        {data.map(item => (<div key={item.id} className={item.done ? "complete" :"notComplete"}> 
        <textarea className='inputTask' key={item.key}
         value={item.name} onChange={(e) => onEdit(e.target.value, item)}/>
        <Done onDone={() => onDone(item)} />
        <Close onClose={() => onClose(item)}/>
        </div>))}
    </div>
  )
}

export default TodoList
