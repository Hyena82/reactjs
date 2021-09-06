import React, { useState } from 'react';
import PropTypes from 'prop-types';

Todoform.propTypes = {
    onSubmit: PropTypes.func,
};
Todoform.defaultProps = {
    onSubmit: null
}

function Todoform(props) {
    const {onSubmit} = props;
    const [value, setvalue] = useState('');    
    const handleValue = (e) => {
        setvalue(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!onSubmit) return;
        const resultVL = {
            name: value
        }
        onSubmit(resultVL)
        setvalue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value = {value} onChange={handleValue}>
                
            </input>
        </form>
    );
}

export default Todoform;