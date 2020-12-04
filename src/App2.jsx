import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CardPage from './pages/CardPage'
import NotFoundPage from './pages/NotFoundPage'




const firebaseConfig = {
  apiKey: 'AIzaSyARWsNdpXlAGW63tSaOKP04ySGR5h1l6O0',
  authDomain: 'app-tarjetasbd.firebaseapp.com',
  databaseURL: 'https://app-tarjetasbd.firebaseio.com',
  projectId: 'app-tarjetasbd',
  storageBucket: 'app-tarjetasbd.appspot.com',
  messagingSenderId: '751504794647',
  appId: '1:751504794647:web:bcc197fb7e3540a4352852',
  measurementId: 'G-T9X5PBPBE2'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const App2 = () => {
    
    const [ todos1, setTodos1 ] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {  
      async function fetchData() {
        try {
            var databaseRef = await firebase.database().ref("/todos");
            databaseRef.once('value', function(snapshot) {
            var todos = [];
            snapshot.forEach(function(childSnapshot) {
                var data = childSnapshot.val();        
                todos.push({ title: data.title, descriton: data.descriton, id: data.id, priority: data.priority, responsible: data.responsible}); // key: key,
            });
            setTodos1(todos)
            });

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
