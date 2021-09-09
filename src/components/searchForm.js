import React, { useState, useRef } from 'react';


function SearchForm(props) {
    const {onSubmit} = props;
    const [searchTerm, setsearchTerm] = useState('');
    const typingTimeOutRef = useRef(null)
    const handleSearchChange = (e) => {
        setsearchTerm(e.target.value)
        if(typingTimeOutRef.current){
            clearTimeout(typingTimeOutRef.current)
        }
        typingTimeOutRef.current = setTimeout(() => {
            const vl = {
                searchTerm: e.target.value
            }
            onSubmit(vl)
        }, 300);
        
    }
    return (
        <div>
            <form>
                <input type="text" value={searchTerm}
                onChange={handleSearchChange}
                ></input>
            </form>
        </div>
    );
}

export default SearchForm;