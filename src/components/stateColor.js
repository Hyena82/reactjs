import React, { useState } from 'react';
const getRandomColor = () =>{
    const listColors = ['green','yellow','red','orange','blue']
    const indexRandom = Math.floor(Math.random() * 5)
    return listColors[indexRandom]
}

const ListColor = (props) =>{
    const initColor = localStorage.getItem('box_color') || 'green';
    const [state, setstate] = useState(initColor);
    const handleClick = ()=>{
        const newColor = getRandomColor();
        setstate(newColor)
        localStorage.setItem('box_color',newColor)
    }
    return(
        <div style={{border: '1px solid #61dafb',color: '#61dafb',padding: '10px',margin: '20px'} }>
            <h5>Component 02 is here! come and take it~~ {props.name}</h5>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Primary</button>
            <div style={{height: '100px', width: '100px',background: state, transition: 'all 0.3s ease-in-out'}}></div>
        </div>
    )
}
export default ListColor