import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CardPage from './pages/CardPage'
import NotFoundPage from './pages/NotFoundPage'

const App2 = () => {
    
    const [ todos1, setTodos1 ] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
      let ignore = false;
  
      async function fetchData() {
        try {
            const response = await axios({
                url: 'http://localhost:3001/todos',
                method: 'get'
            })
            if (!ignore){
                setTodos1(response.data)
            }
        } catch (error) {
            if (error.response) { // Errores que nos responde el server
                setError("Ha ocurrido un error en el servidor del clima")
            } else if (error.request) { // Errores que suceden por no llegar al server
                setError("Verifique la conexión a internet")
            } else { // Errores imprevistos
                setError("Error al cargar los datos")
            }                
        }        
      }
  
      fetchData()
      return () => { ignore = true; }

    }, []);


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
                        <WelcomePage
                        ></WelcomePage>
                    </Route>
                    <Route path="/main">
                        <MainPage todos={todos1}
                          onHandleDelete={ (cardid) => handleDelete(cardid)}
                          error={error}
                          onSetError={(val) => setError(val)}
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
