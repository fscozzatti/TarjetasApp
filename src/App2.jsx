import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CardPage from './pages/CardPage'
import NotFoundPage from './pages/NotFoundPage'
import { todos } from './todos.json';


const App2 = () => {
    const [ todos1, setTodos1 ] = useState(todos)

    const handleSubmit = ( cardid, titulo, responsable, descripcion, prioridad ) => {
        const isLargeNumber = (element) => element.cardid === cardid;
        const index = todos1.findIndex(isLargeNumber)
        const todo = {
            cardid: cardid,
            title: titulo,
            responsible: responsable,
            priority: prioridad,
            descriton: descripcion,
            }
        if (index !== -1 ){
            todos1.splice( index, 1, todo)
            setTodos1(todos1)               
        }else{
            //[ todos ] = [ ...todos, todo]
            setTodos1([ ...todos1, todo])      
        }
    }
    
    const handleDelete = ( cardid ) =>{
        const isLargeNumber = (element) => element.cardid === cardid;
        const index = todos1.findIndex(isLargeNumber)
        todos1.splice( index, 1)
        for ( var i = 0; i < todos1.length ; i++) {
            const j = i + 1
            todos1[i].cardid = j
        }
        setTodos1([...todos1]) 
    }


    return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage></WelcomePage>
                    </Route>
                    <Route path="/main">
                        <MainPage todos={todos1}
                          onHandleDelete={ (cardid) => handleDelete(cardid)}  
                        >
                        </MainPage>
                    </Route>
                    <Route path="/cardid/:cardid">
                        <CardPage todos={todos1}
                        onHandleSubmit={ (cardid, titulo, responsable, descripcion, prioridad) => handleSubmit(cardid, titulo, responsable, descripcion, prioridad)}   
                        ></CardPage>
                    </Route>
                    <Route>
                        <NotFoundPage></NotFoundPage>
                    </Route>
                </Switch>
            </Router>
    )
}


export default App2
