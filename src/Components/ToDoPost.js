import React from "react";

const ToDoPost = ({list, handleDeleteElement}) => {

    return (
        list.map((el, index) => {
            return (
                <div className='todo_post' key={index}>
                    {el.text}
                    <button onClick={() => {
                        el.id = index;
                        handleDeleteElement(el.id)
                    }}> Delete </button>
                </div>
            )
        }))
}

export default ToDoPost;