import React from 'react'

const Todolist = (props) => {
    
    return (
        <>
        <div className="cross">
        <button onClick={() => {
        props.onSelect(props.id)
        }
        }>Delete</button>
       <button onClick={() => {
        props.onSelect(props.id)
        }
        }>Edit</button>
          
     <li>{props.text}</li>
     </div>
        </>
    )
}

export default Todolist
