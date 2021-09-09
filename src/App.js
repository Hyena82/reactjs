
import { useEffect, useRef, useState } from 'react';
import './App.css';
//import Header from './components/component01';
import Postlist from './components/postlist';
import Pagination from './components/pagination';
import SearchForm from './components/searchForm';
import queryString from 'query-string'
function App() {
    const [postList, setpostList] = useState([]);
    const [paginationAPI, setpaginationAPI] = useState({
        _page: 1,
        _limit: 5,
        _totalRows: 1
    });
    const [filter, setfilter] = useState({
        _page: 1,
        _limit: 5
    });
    // const atu = {firstName: 'Ben', lastName: 'Hector'}
    // console.log('nhg',{...atu});
    // console.log('START',filter);
    useEffect(() => {
        console.log('useEffect1');
        const fetchPostList = async () => {
            const paramsString = queryString.stringify(filter)
            const requestURL = `https://js-post-api.herokuapp.com/api/posts?${paramsString}`;
            const response = await fetch(requestURL);
            const responseJSON = await response.json()
            const { data, pagination } = responseJSON
             console.log('updatepost');
             setpostList(data)
             //console.log('updatepagination');
             setpaginationAPI(pagination)
             //console.log('useEffect2');
        }
        fetchPostList()
    }, [filter]);
    
    const handlePageChange = (newPage) => {
       // console.log('improcess',filter);
        setfilter({
            ...filter,
            _page: newPage
        })
      
    }
    const sentDataForm = (params) => {
        setfilter({
            ...filter,
            _page: 1,
            title_like: params.searchTerm
        })
    }


    return (
        <div className="App">
            <header className="App-header">
                <SearchForm onSubmit={sentDataForm} />
                <Postlist posts={postList}></Postlist>
                <Pagination pagination={paginationAPI}
                            onPageChange={handlePageChange}
                ></Pagination>
                <p>
                    how can i use this?.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {/* <Header></Header> */}
            </header>
        </div>
    );
}

export default App;
