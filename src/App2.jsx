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
        /*todos1[index].title = titulo
        todos1[index].responsible = responsable
        todos1[index].descriton = descripcion
        todos1[index].priority = prioridad*/
        todos.splice( index, 1, todo)
        setTodos1(todos)
    }
    
    return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage></WelcomePage>
                    </Route>
                    <Route path="/main">
                        <MainPage todos={todos1}>
                        </MainPage>
                    </Route>
                    <Route path="/cardid/:cardid">
                        <CardPage todos={todos1}
                        onHandleSubmit={ (cardid, titulo, responsable, descripcion, prioridad) => {
                            console.log( 'hola',cardid, titulo, responsable, descripcion, prioridad)
                            handleSubmit(cardid, titulo, responsable, descripcion, prioridad)
                        }}
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
