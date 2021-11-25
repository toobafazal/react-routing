import React, { useState } from 'react'
import Todolist from '../Components/TodoList';

const Todo = () => {
    const[inputList,setInputList] = useState("");
    const[items,setItems] = useState([]);
    // const[deleteAll,setDeleteAll] = useState()
 
    const removeAll = () =>{
        setItems([]);
    }
    const itemsEvent = (e) => {
        setInputList(e.target.value);
    }
    const List = () =>{
        setItems((olditems)=>{
            return [...olditems,inputList];
        });
        setInputList("");
    };

    const deleteItems = (id) =>{
        console.log("delete")
        setItems((olditems)=>{
            return olditems.filter((arr,value)=>{
                return value !== id;
            });
        });
    };
    return (
        <>
          <div className="main_div">
           <div className="center_div">
           <br />
           <h1>ToDo List</h1>
           <br />
            <input type = "text" placeholder=" Add Items" value={inputList} onChange={itemsEvent} />
            <button className="Editbutton" onClick={List}>+</button>
            <button className="deletebutton" onClick={removeAll}>delete all</button>

            <ol>
                {/* <li>{inputList}</li> */}
                {items.map((itemsvalue,index)=>{
                   return <Todolist
                   key={index}
                   id={index}
                    text={itemsvalue}
                    onSelect={deleteItems}
                    
                    />
                })}
            </ol>
           </div>

          </div>  
        </>
    )
}

export default Todo
