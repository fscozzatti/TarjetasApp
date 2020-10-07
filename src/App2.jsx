import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CardPage from './pages/CardPage'
import NotFoundPage from './pages/NotFoundPage'
import { todos } from './todos.json';

const App2 = () => {

    return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage></WelcomePage>
                    </Route>
                    <Route path="/main">
                        <MainPage todos={todos}>
                        </MainPage>
                    </Route>
                    <Route path="/cardid/:cardid">
                        <CardPage todos={todos}
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
