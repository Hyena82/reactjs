import React from 'react';
import PropTypes from 'prop-types';

Postlist.propTypes = {
    posts: PropTypes.array,
};
Postlist.defaultProps = {
    posts: []
}
function Postlist(props) {
    console.log('render..');
    const { posts } = props
    const renderList = posts.map( post =>{
        return <li key={post.id}>{post.title}</li>
    })
    return (
        <div style={{fontSize: 'calc(1px + 2vmin)'}}>
            {renderList}
        </div>
    );
}

export default Postlist;