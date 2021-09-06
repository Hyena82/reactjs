import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoList(props) {
    const handleClick = (name) => {
        if(onTodoClick){
            onTodoClick(name)
        }
    }
    const { todos, onTodoClick } = props
    let list = todos.map((value,index) => {
        return <li key={index}
                    onClick={()=>{handleClick(value.name)}}
                >
                {value.name}
                </li>
    })
    return (
        <ul style={{ color: 'green' }}>
            {list}
        </ul>
    );
}

export default TodoList;