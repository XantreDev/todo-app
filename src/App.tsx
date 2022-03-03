import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Nav from './components/Nav/Nav'
import IndexPage from './pages/IndexPage'
import TodoPage from './pages/TodoPage'
import { routes } from './constants';


const App = () => {
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