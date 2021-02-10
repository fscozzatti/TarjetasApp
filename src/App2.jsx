import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CardPage from './pages/CardPage'
import NotFoundPage from './pages/NotFoundPage'

const App2 = () => {
    
    const [todos1, setTodos1 ] = useState([])
    const [error, setError] = useState(null)
    const [q , setQ ] = useState("")

    useEffect(() => {  
    async function fetchData() {
    await axios.get('https://app-tarjetas-fs.firebaseio.com/todos.json')
        .then(resAux => {
            setTodos1(resAux.data)})
        .catch( (err) => {
            if (err.response) { // Errores que nos responde el server
                setError("Ha ocurrido un error en el servidor de tarjetas")
            } else if (err.request) { // Errores que suceden por no llegar al server
                setError("Verifique la conexión a internet")
            } else { // Errores imprevistos
                setError("Error al cargar los datos")
                console.log(err)
            }
        })  
    }
  
      fetchData()
    }, []);

    async function putData(todos1) {
        await axios.put('https://app-tarjetas-fs.firebaseio.com/todos.json/', todos1)
        .then(res => { })        
        .catch( (err) => {
            if (err.response) { // Errores que nos responde el server
                setError("Ha ocurrido un error en el servidor de tarjetas")

            } else if (err.request) { // Errores que suceden por no llegar al server
                setError("Verifique la conexión a internet")

            } else { // Errores imprevistos
                setError("Error al cargar los datos")
                console.log(err)
            }
        }) 
 
    }
 

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
            putData(todos1)

        }else{
            setTodos1([ ...todos1, todo]) 
            putData([ ...todos1, todo])

        }
    }
    
    const handleDelete = ( id ) =>{
        const isLargeNumber = (element) => element.id === id;
        const index = todos1.findIndex(isLargeNumber)
        todos1.splice( index, 1)
        setTodos1([...todos1])
        putData([ ...todos1])

    }
    
    function search(rows) {
        return rows.filter((row) => row.responsible.toLowerCase().indexOf(q) > -1)
    }

    return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <WelcomePage
                        ></WelcomePage>
                    </Route>
                    <Route path="/main">
                        <MainPage todos={search(todos1)}
                          onHandleDelete={ (id) => handleDelete(id)}
                          error={error}
                          onSetError={(val) => setError(val)}
                          onSetQ= {(q) => setQ(q)}
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
