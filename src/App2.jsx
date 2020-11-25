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
                method: 'GET'
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


    const handleSubmit = ( id, titulo, responsable, descripcion, prioridad ) => {
        const isLargeNumber = (element) => element.id === id;
        const index = todos1.findIndex(isLargeNumber)
        const todo = {
            id: id,
            title: titulo,
            responsible: responsable,
            priority: prioridad,
            descriton: descripcion,
            }
        if (index !== -1 ){
            todos1.splice( index, 1, todo)
            setTodos1(todos1) 
            axios.put('http://localhost:3001/todos/' + id, todo)
            .then(res => {
            })   
        }else{
            setTodos1([ ...todos1, todo])  
            axios.post('http://localhost:3001/todos', todo)
            .then(res => {
            })   
        }
    }
    
    const handleDelete = ( id ) =>{
        axios.delete('http://localhost:3001/todos/' + id + '/')
        .then(res => {
        })
        const isLargeNumber = (element) => element.id === id;
        const index = todos1.findIndex(isLargeNumber)
        todos1.splice( index, 1)
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
                          onHandleDelete={ (id) => handleDelete(id)}
                          error={error}
                          onSetError={(val) => setError(val)}
                        >
                        </MainPage>
                    </Route>
                    <Route path="/id/:id">
                        <CardPage todos={todos1}
                        onHandleSubmit={ ( id, titulo, responsable, descripcion, prioridad) => handleSubmit(id, titulo, responsable, descripcion, prioridad)}   
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
