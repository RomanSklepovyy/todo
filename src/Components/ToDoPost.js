import React from "react";

const ToDoPost = (props) => {
    console.log(props);
    return (
        props.list.map((el) => {
            return (
                <div className='todo_post' key={el.id}>
                    {el.text}
                    <button onClick={() => props.handleDeleteElement(el.id)}> Delete </button>
                </div>
            )
        }))
}

export default ToDoPost;