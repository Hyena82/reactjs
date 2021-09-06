import { useState } from "react";
import TodoList from "./todolist";
import Todoform from "./todoform";
function Header() {
    const myList = [
        {
            id: 1,
            name: 'nguyenductu'
        },
        {
            id: 2,
            name: 'long nhat'
        },
        {
            id: 3,
            name: 'thai hoang'
        },
    ]
    
    const [todoList, settodoList] = useState(myList);
    console.log(todoList);
    const toListClick = (name) => {
        const index = todoList.findIndex( x => x.name === name)
        if(index < 0) return;
        const newtodoList = [...todoList];
        newtodoList.splice(index, 1)
        settodoList(newtodoList)
    }
    const addTodo = (todothing) => {
        const newTodoList = [...todoList]
        newTodoList.push(todothing)
        settodoList(newTodoList)
    }
    return (
        <div style={{ border: '1px solid red', color: 'red', padding: '20px', height: '600px', width: '1200px' }}>
            <h1>
                Oops!... this too easy right?
                {/* <ListColor name="this is my prop"></ListColor> */}
                <Todoform onSubmit={addTodo}></Todoform>
                <TodoList todos={todoList} onTodoClick={toListClick}></TodoList>
            </h1>
            <span>yayy ^^ Here you stay at Component 01*</span>

        </div>
    );
}

export default Header;
