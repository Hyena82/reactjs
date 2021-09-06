
import './App.css';
import Header from './components/component01';
function App() {
    return (
        <div className="App">
            <header className="App-header">
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
                <Header></Header>
            </header>
        </div>
    );
}

export default App;
