import React, { useReducer, useEffect } from 'react';
import BoardList from './components/BoardModule/BoardList';
import { Context } from './context';
import reducer from './reducer';
import BASE_STATE from './utils/BaseState';
import './styles/Main.css';

function App() {
 
    const [state, dispatch] = useReducer(reducer, (JSON.parse(localStorage.getItem('boards')) || BASE_STATE));

    useEffect(() => {
        localStorage.setItem('boards', JSON.stringify(state));
    }, [state]);

    return (
        <Context.Provider value={{
            dispatch
        }}>
            <div className="App">
                    <BoardList
                        boards={state}
                    ></BoardList>
            </div>
        </Context.Provider>
    );
}

export default App;
