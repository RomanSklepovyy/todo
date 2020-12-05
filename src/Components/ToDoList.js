import React from 'react';
import ToDoPost from "./ToDoPost";

class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.inputHandler = this.inputHandler.bind(this);
        this.addPost = this.addPost.bind(this);
        this.handleDeleteElement = this.handleDeleteElement(this);

        this.state = {
            counter: 0,
            value: '',
            list: []
        }
    }

    render() {

        const {list} = this.state;

        return (
            <div className="list_container">
                <label>Text:</label>
                <input type='text' onChange={this.inputHandler} value={this.state.value}/>
                <button onClick={this.addPost}>Add</button>
                {list.length ? <ToDoPost list={list} handleDeleteElement={this.handleDeleteElement}/> : null}
                {/*{list.length && <ToDoPost list={list}/>} - render 0 after button*/}
            </div>
        )
    }

    inputHandler(e) {
        this.setState({value: e.target.value});
    }

    addPost() {
        let {counter} = this.state;
        const posts = this.state.list;
        posts.push({text : this.state.value, id: counter++});

        this.setState({value: '', list: posts, counter: counter++});

        console.log(this.state);
    }

    handleDeleteElement(id) {
        this.setState(state => ({
            elements: state.list.filter(el => el.id !== id)
        }));
    }
}


export default ToDoList;