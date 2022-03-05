import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import IndexPage from './pages/IndexPage'
import TodoPage from './pages/TodoPage'
import { routes } from './constants';
import useLoad from './hooks/useLoad';


const App = () => {
    useLoad()

    return (
        <>  
            <BrowserRouter>
                <Routes>
                    <Route path={routes.index} element={<IndexPage/>}/>
                    <Route path={routes.todo} element={<TodoPage />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App